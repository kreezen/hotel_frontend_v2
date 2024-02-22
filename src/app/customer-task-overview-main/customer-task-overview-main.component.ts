import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskOverviewComponent } from './customer-task-overview/customer-task-overview.component';
import { CustomerTaskStoreService } from './customer-task-overview/store/customer-task-store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchService } from '../search/store/search.service';
import { SearchComponent } from '../search/search.component';
import { FilteredCustomerTaskStoreService } from '../shared-stores/filtered-customer-task-store.service';
import { TaskStoreService } from '../customer-task-edit/store/task-store.service';
import { RouterModule } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-task-overview-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskOverviewComponent, SearchComponent],
  templateUrl: './customer-task-overview-main.component.html',
  styleUrls: ['./customer-task-overview-main.component.css']
})
export class CustomerTaskOverviewMainComponent {
  private searchService = inject(SearchService);
  private filteredTaskService = inject(FilteredCustomerTaskStoreService)
  private taskStoreService = inject(TaskStoreService)
  private filteredCustomerTaskStore = this.filteredTaskService.filteredCustomerTaskStore
  private sub: Subscription
  customerTasks = toSignal(this.filteredCustomerTaskStore.filteredCustomerTasks$)
  taskClicked$ = this.taskStoreService.taskClickedSource$
  searchChange$ = this.searchService.searchSource$

  constructor() {
    this.sub = this.filteredCustomerTaskStore.filteredCustomerTasks$.subscribe(console.log)
  }
}
