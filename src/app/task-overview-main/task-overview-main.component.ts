import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskOverviewService } from './service/task-overview.service';
import { SearchComponent } from '../shared-components/search/search.component';
import { TaskOverviewComponent } from './task-overview/task-overview.component';
import { deleteTaskSource$ } from './task-overview/store/task-store.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-overview-main',
  standalone: true,
  imports: [CommonModule, SearchComponent, TaskOverviewComponent],
  templateUrl: './task-overview-main.component.html',
  styleUrls: ['./task-overview-main.component.css']
})
export class TaskOverviewMainComponent {
  private customerTaskOverviewService = inject(CustomerTaskOverviewService);
  searchChange$ = this.customerTaskOverviewService.searchChange$
  customerTasks = this.customerTaskOverviewService.customerTasks
  taskClicked$ = this.customerTaskOverviewService.taskClicked$
  deleteTaskSource$ = this.customerTaskOverviewService.deleteTask$
  deleteTaskAuto$ = this.customerTaskOverviewService.deleteTaskAuto$

  constructor() {
    const auto = toSignal(this.deleteTaskAuto$)
  }
}
