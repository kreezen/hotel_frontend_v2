import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { CreateTask } from 'src/app/domain/activities/task.entity';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';

export const createTaskSource$ = new Source<CreateTask>("[create task] createTaskSource$")

@Injectable({
  providedIn: 'root'
})
export class CreateTaskStoreService {
  apiService = inject(ApiService)
  createTask$ = createTaskSource$.pipe(
    switchMap(
      (createTask) => this.apiService.createTask(createTask.payload)
    ),
    catchError(() => {
      toastMessageSource$.next({ message: 'Task konnte nicht erstellt werden', type: 'error' })
      return of('task went shit')
    }
    ),
    tap(() =>
      toastMessageSource$.next({ message: 'Task wurde erfolgreich erstellt', type: 'success' })),
  )
}
