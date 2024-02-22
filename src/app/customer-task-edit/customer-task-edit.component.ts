import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskStoreService } from '../customer-task-overview-main/customer-task-overview/store/customer-task-store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../data/entities/task.entity';
import { TaskStoreService } from './store/task-store.service';
import { Subject, Subscription, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-customer-task-edit',
  standalone: true,

  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './customer-task-edit.component.html',
  styleUrls: ['./customer-task-edit.component.css']
})
export class CustomerTaskEditComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  private taskStoreService = inject(TaskStoreService)
  taskState = toSignal(this.taskStoreService.taskStore.state$)
  taskFormBuilder = new FormBuilder()
  taskForm: FormGroup = new FormGroup({})


  createTaskForm(task: Task): FormGroup {
    return this.taskFormBuilder.group({
      title: task.titel,
      description: task.descreption,
    })
  }

  ngOnInit(): void {
    this.taskStoreService.taskStore.state$.pipe(takeUntil(this.destroy$)).subscribe(task => {
      console.log(task)
      this.taskForm = this.createTaskForm(task)
    }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
