import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

import { Task } from 'src/app/domain/activities/task.entity';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';


export interface TaskState {
  tasks: Task[];
  error: string;
}

const initState: TaskState = {
  tasks: [],
  error: ""
}

export const deleteTaskSource$ = new Source<string>('[delete task] deleteTaskSource$');


@Injectable({
  providedIn: 'root'
})
export class CustomerTaskStoreService {
  private apiService = inject(ApiService);

  deleteTaskSource$ = deleteTaskSource$.pipe(
    switchMap((val) => this.apiService.deleteTask(val.payload).pipe(
      catchError((err) => {
        toastMessageSource$.next({ message: 'Task konnte nicht gelöscht werden', type: 'error' })
        return of(err)
      }),
      tap((data) => {
        if (!(data instanceof Error || data instanceof HttpErrorResponse)) {
          toastMessageSource$.next({ message: 'Task wurde erfolgreich gelöscht', type: 'success' })
          refreshSource$.next(true)
        }
      })
    )),
  )
  private getAlltasksSource$ = refreshSource$.pipe(
    switchMap(() => this.apiService.getAllTasks()),
    toSource("[loading task] taskSource$")
  )

  customerTaskStore = adapt(initState, {
    adapter: {
      loadTasks: (state, newState) => {
        return { ...state, tasks: newState }
      },
      selectors: {
        tasks: state => state.tasks
      }
    },
    sources: {
      loadTasks: this.getAlltasksSource$
    }
  });

}
