import { Injectable, inject } from '@angular/core';
import { joinStores } from '@state-adapt/rxjs';
import { CustomerTaskStoreService } from '../task-overview/store/task-store.store';
import { SearchService } from '../../shared-components/search/store/search.store';


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
        task.assignedTo.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  })()

  constructor() { }
}
