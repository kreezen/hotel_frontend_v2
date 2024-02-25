import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from 'src/app/data/entities/task.entity';


@Component({
  selector: 'app-customer-task-edit',
  standalone: true,

  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './customer-task-edit.component.html',
  styleUrls: ['./customer-task-edit.component.css']
})
export class CustomerTaskEditComponent implements OnInit {
  @Input() task: Task | null = { titel: '', descreption: '', id: 0, isDone: false }
  @Output() submitTask: EventEmitter<Task> = new EventEmitter<Task>()

  private fb = new FormBuilder()
  taskForm: FormGroup = new FormGroup({})

  ngOnInit() {
    this.taskForm = this.createTaskForm(this.fb, this.task!)
  }

  createTaskForm(fb: FormBuilder, task: Task): FormGroup {
    return fb.group({
      title: task.titel,
      description: task.descreption,
    })
  }

  onSubmit() {
    const task: Task = {
      titel: this.taskForm.value.title,
      descreption: this.taskForm.value.description,
      id: this.task!.id,
      isDone: this.task!.isDone
    }
    this.submitTask.emit(task)
  }
}
