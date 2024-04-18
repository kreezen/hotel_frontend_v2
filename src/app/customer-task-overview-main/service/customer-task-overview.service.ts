import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditTaskStoreService, taskClickedSource$ } from 'src/app/customer-task-edit-main/customer-task-edit/store/edit-task-store.store';
import { SearchService } from 'src/app/search/store/search.store';
import { FilteredCustomerTaskStoreService } from 'src/app/shared-stores/filtered-customer-task-store.store';

@Injectable({
  providedIn: 'root'
})
export class CustomerTaskOverviewService {
  private searchService = inject(SearchService);
  private filteredTaskService = inject(FilteredCustomerTaskStoreService)
  private filteredCustomerTaskStore = this.filteredTaskService.filteredCustomerTaskStore
  customerTasks = toSignal(this.filteredCustomerTaskStore.filteredCustomerTasks$)
  taskClicked$ = taskClickedSource$
  searchChange$ = this.searchService.searchSource$
}
