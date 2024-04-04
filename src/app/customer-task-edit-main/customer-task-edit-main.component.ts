import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskEditComponent } from './customer-task-edit/customer-task-edit.component';
import { toastMessageSource$ } from '../toast-message/store/toast-message-store.store';
import { CustomerTaskEditService } from './service/customer-task-edit.service';
import { Task } from '../domain/activities/task.entity';
import { updateTaskSource$ } from './customer-task-edit/store/edit-task-store.store';

@Component({
  selector: 'app-customer-task-edit-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskEditComponent],
  templateUrl: './customer-task-edit-main.component.html',
  styleUrls: ['./customer-task-edit-main.component.css']
})
export class CustomerTaskEditMainComponent implements OnInit {
  ngOnInit(): void {
    this.customerTaskEditService.updateTask$.subscribe((task) => {
      console.log("task updated", task)
    })
  }
  private customerTaskEditService = inject(CustomerTaskEditService)

  task = this.customerTaskEditService.task

  onSubmitTask(task: Task) {
    console.log("yo update")
    updateTaskSource$.next(task)
  }
}
