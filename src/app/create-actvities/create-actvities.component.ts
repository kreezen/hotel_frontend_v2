import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateTaskStoreService, createTaskSource$ } from './create-task/store/create-task-store.service';
import { CreateTask } from '../domain/activities/task.entity';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-create-actvities',
  standalone: true,
  imports: [CommonModule, CreateTaskComponent],
  templateUrl: './create-actvities.component.html',
  styleUrls: ['./create-actvities.component.css']
})
export class CreateActvitiesComponent {

  createTask = inject(CreateTaskStoreService).createTask$


  constructor() {
    const auto = toSignal(this.createTask)
  }

  onSubmitTask(task: CreateTask) {
    createTaskSource$.next(task)
  }
}
