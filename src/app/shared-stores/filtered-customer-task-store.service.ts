import { Injectable, inject } from '@angular/core';
import { SearchService } from '../search/store/search.service';

import { joinStores } from '@state-adapt/rxjs';
import { CustomerTaskStoreService } from '../customer-task-overview-main/customer-task-overview/store/customer-task-store.service';

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
        task.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.descreption.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  })()

  constructor() { }
}
