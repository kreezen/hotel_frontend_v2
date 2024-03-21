import { Injectable, inject } from '@angular/core';
import { SearchService } from '../search/store/search.store';

import { joinStores } from '@state-adapt/rxjs';
import { CustomerTaskStoreService } from '../customer-task-overview-main/customer-task-overview/store/customer-task-store.store';

@Injectable({
  providedIn: 'root'
})
export class FilteredCustomerTaskStoreService {
  private searchService = inject(SearchService);
  private customerTaskService = inject(CustomerTaskStoreService);
  private searchStore = this.searchService.searchStore;
  private customerTaskStore = this.customerTaskService.customerTaskStore;

  filteredCustomerTaskStore = joinStores({
    searchTerm: this.searchStore,
    customerTaskStore: this.customerTaskStore
  })({
    filteredCustomerTasks: state => {
      const searchTerm = state.searchTerm
      const tasks = state.customerTaskStore.tasks;
      return tasks.filter(task =>
        task.description.toLowerCase().includes(searchTerm.toLowerCase())

      );
    }
  })()

  constructor() { }
}
