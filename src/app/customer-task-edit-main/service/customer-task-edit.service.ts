import { Injectable, inject } from '@angular/core';
import { ToastMessageStoreService } from 'src/app/toast-message/store/toast-message-store.store';
import { EditTaskStoreService } from '../customer-task-edit/store/edit-task-store.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CustomerTaskEditService {
  private taskStoreService = inject(EditTaskStoreService)
  private toastMessageService = inject(ToastMessageStoreService)

  task = toSignal(this.taskStoreService.taskStore.state$)

}
