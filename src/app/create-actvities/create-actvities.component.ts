import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateTaskStoreService, createTaskSource$ } from './create-task/store/create-task-store.service';
import { CreateTask, Task } from '../domain/activities/task.entity';

@Component({
  selector: 'app-create-actvities',
  standalone: true,
  imports: [CommonModule, CreateTaskComponent],
  templateUrl: './create-actvities.component.html',
  styleUrls: ['./create-actvities.component.css']
})
export class CreateActvitiesComponent implements OnInit {

  createTask = inject(CreateTaskStoreService).createTask$
  ngOnInit(): void {
    this.createTask.subscribe(() => console.log('crea te task'))
  }

  onSubmitTask(task: CreateTask) {
    createTaskSource$.next(task)
  }
}
