import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskOverviewComponent } from './customer-task-overview/customer-task-overview.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchService } from '../search/store/search.service';
import { SearchComponent } from '../search/search.component';
import { FilteredCustomerTaskStoreService } from '../shared-stores/filtered-customer-task-store.service';
import { EditTaskStoreService } from '../customer-task-edit-main/customer-task-edit/store/edit-task-store.service';
import { CustomerTaskStoreService } from './customer-task-overview/store/customer-task-store.service';



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
  private editTaskStoreService = inject(EditTaskStoreService)
  private filteredCustomerTaskStore = this.filteredTaskService.filteredCustomerTaskStore
  private customerTaskStore = inject(CustomerTaskStoreService)
  customerTasks = toSignal(this.filteredCustomerTaskStore.filteredCustomerTasks$)
  taskClicked$ = this.editTaskStoreService.taskClickedSource
  searchChange$ = this.searchService.searchSource$

}
