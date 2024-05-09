import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Task } from 'src/app/domain/activities/task.entity';


@Component({
  selector: 'app-task-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.css']
})
export class TaskOverviewComponent {
  @Input() customerTasks: Task[] = [];
  @Output() taskClicked = new EventEmitter<Task>();
}
