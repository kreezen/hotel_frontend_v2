import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Source } from '@state-adapt/rxjs';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

import { CreateTask } from 'src/app/domain/activities/task.entity';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';

export const createTaskSource$ = new Source<CreateTask>("[create task] createTaskSource$")

@Injectable({
  providedIn: 'root'
})
export class CreateTaskStoreService {
  apiService = inject(ApiService)
  createTask$ = createTaskSource$.pipe(
    switchMap(
      (createTask) => this.apiService.createTask(createTask.payload).pipe(
        catchError((err) => {
          toastMessageSource$.next({ message: 'Task konnte nicht erstellt werden', type: 'error' })
          return of(err)
        }
        ),
        tap((data) => {
          if (!(data instanceof Error || data instanceof HttpErrorResponse)) {
            toastMessageSource$.next({ message: 'Task wurde erfolgreich erstellt', type: 'success' })
            refreshSource$.next(true)
          }
        }),
      )
    ),

  )
}
