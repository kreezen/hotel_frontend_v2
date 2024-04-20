import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchService } from 'src/app/shared-components/search/store/search.store';
import { taskClickedSource$ } from 'src/app/task-edit-main/task-edit/store/edit-task-store.store';
import { FilteredCustomerTaskStoreService } from 'src/app/task-overview-main/store/filtered-task-store.store';


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
