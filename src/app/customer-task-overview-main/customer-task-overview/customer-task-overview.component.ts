import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskStoreService } from './store/customer-task-store.service';
import { Task } from 'src/app/data/entities/task.entity';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-task-overview',
  standalone: true,
  providers: [CustomerTaskStoreService],
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-task-overview.component.html',
  styleUrls: ['./customer-task-overview.component.css']
})
export class CustomerTaskOverviewComponent {
  @Input() customerTasks: Task[] = [];
  @Output() taskClicked = new EventEmitter<Task>();
}
