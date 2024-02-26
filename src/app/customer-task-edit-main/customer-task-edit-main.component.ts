import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskStoreService } from './customer-task-edit/store/edit-task-store.store';
import { CustomerTaskEditComponent } from './customer-task-edit/customer-task-edit.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Task } from '../data/entities/task.entity';
import { ToastMessageStoreService, toastMessageSource$ } from '../toast-message/store/toast-message-store.store';
import { CustomerTaskEditService } from './service/customer-task-edit.service';

@Component({
  selector: 'app-customer-task-edit-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskEditComponent],
  templateUrl: './customer-task-edit-main.component.html',
  styleUrls: ['./customer-task-edit-main.component.css']
})
export class CustomerTaskEditMainComponent {
  private customerTaskEditService = inject(CustomerTaskEditService)
  private messageSource$ = toastMessageSource$

  task = this.customerTaskEditService.task

  onSubmitTask(task: Task) {
    this.messageSource$.next({ message: 'Task updated', type: 'success' })
  }
}
