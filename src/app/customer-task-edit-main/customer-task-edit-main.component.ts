import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskEditComponent } from './customer-task-edit/customer-task-edit.component';
import { toastMessageSource$ } from '../toast-message/store/toast-message-store.store';
import { CustomerTaskEditService } from './service/customer-task-edit.service';
import { Task } from '../domain/activities/task.entity';

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
    this.messageSource$.next({ message: 'Task updated', type: 'error' })
  }
}
