import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { BehaviorSubject, catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

import { Task } from 'src/app/domain/activities/task.entity';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';


const initTaskState: Task = Task.initState()

export const taskClickedSource$ = new BehaviorSubject<Task>(initTaskState);
export const updateTaskSource$ = new Source<Task>('[task update] updateTaskSource$');

@Injectable({
  providedIn: 'root'
})
export class EditTaskStoreService {
  private apiService = inject(ApiService)
  private taskClickedSource$ = taskClickedSource$.pipe(toSource('[task edit] taskClickedSource$'))
  updateTaskSource$ = updateTaskSource$.pipe(
    switchMap((newState) => this.apiService.updateTask(newState.payload)),
    catchError(() => {
      toastMessageSource$.next({ message: 'Task konnte nicht geupdatet werden', type: 'error' })
      return of(Error('Couldnt update task'))
    }
    ),
    tap((data) => {
      console.log(data)
      if (!(data instanceof Error)) {
        toastMessageSource$.next({ message: 'Task wurde geupdatet', type: 'success' })
        refreshSource$.next(true)
      }
    }),

  )

  taskStore = adapt(initTaskState, {
    adapter: {
      taskClicked: (state, newState) => {
        return newState
      },
    },
    sources: {
      taskClicked: this.taskClickedSource$
    }
  })

}
