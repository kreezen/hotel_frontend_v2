import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerTaskEditService } from './service/task-edit-main.service';
import { Task } from '../domain/activities/task.entity';

import { toSignal } from '@angular/core/rxjs-interop';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { updateTaskSource$ } from './task-edit/store/edit-task-store.store';

@Component({
  selector: 'app-task-edit-main',
  standalone: true,
  imports: [CommonModule, TaskEditComponent],
  templateUrl: './task-edit-main.component.html',
  styleUrls: ['./task-edit-main.component.css']
})
export class TaskEditMainComponent {

  customerTaskEditService = inject(CustomerTaskEditService).updateTask$
  task = inject(CustomerTaskEditService).task

  constructor() {

    const auto = toSignal(this.customerTaskEditService)
  }

  onSubmitTask(task: Task) {
    updateTaskSource$.next(task)
  }
}
