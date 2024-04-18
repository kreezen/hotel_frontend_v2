import { AfterViewInit, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Task } from 'src/app/domain/activities/task.entity';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-customer-task-overview',
  standalone: true,
  /* providers: [CustomerTaskStoreService], */
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-task-overview.component.html',
  styleUrls: ['./customer-task-overview.component.css']
})
export class CustomerTaskOverviewComponent {
  @Input() customerTasks: Task[] = [];
  @Output() taskClicked = new EventEmitter<Task>();


}
