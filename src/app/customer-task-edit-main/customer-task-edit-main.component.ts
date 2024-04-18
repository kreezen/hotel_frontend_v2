import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskEditComponent } from './customer-task-edit/customer-task-edit.component';
import { CustomerTaskEditService } from './service/customer-task-edit.service';
import { Task } from '../domain/activities/task.entity';
import { updateTaskSource$ } from './customer-task-edit/store/edit-task-store.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-task-edit-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskEditComponent],
  templateUrl: './customer-task-edit-main.component.html',
  styleUrls: ['./customer-task-edit-main.component.css']
})
export class CustomerTaskEditMainComponent {



  customerTaskEditService = inject(CustomerTaskEditService).updateTask$
  task = inject(CustomerTaskEditService).task

  constructor() {
    const asd = toSignal(this.customerTaskEditService)
  }

  onSubmitTask(task: Task) {
    updateTaskSource$.next(task)
  }
}
