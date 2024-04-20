import { Injectable, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { EditTaskStoreService } from '../task-edit/store/edit-task-store.store';

@Injectable({
  providedIn: 'root'
})

export class CustomerTaskEditService {
  private taskStoreService = inject(EditTaskStoreService)

  updateTask$ = this.taskStoreService.updateTaskSource$
  task = toSignal(this.taskStoreService.taskStore.state$)
  task$ = this.taskStoreService.taskStore.state$
}
