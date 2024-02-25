import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskStoreService } from './customer-task-edit/store/edit-task-store.service';
import { CustomerTaskEditComponent } from './customer-task-edit/customer-task-edit.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Task } from '../data/entities/task.entity';
import { ToastMessageStoreService } from '../toast-message/store/toast-message-store.service';

@Component({
  selector: 'app-customer-task-edit-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskEditComponent],
  templateUrl: './customer-task-edit-main.component.html',
  styleUrls: ['./customer-task-edit-main.component.css']
})
export class CustomerTaskEditMainComponent {

  private taskStoreService = inject(EditTaskStoreService)
  private toastMessageService = inject(ToastMessageStoreService)
  task = toSignal(this.taskStoreService.taskStore.state$)

  onSubmitTask(task: Task) {
    this.toastMessageService.messageSource$.next({ message: 'Task updated', type: 'success' })
  }
}
