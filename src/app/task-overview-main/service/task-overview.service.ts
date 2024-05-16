import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchStoreService } from 'src/app/shared-components/search/store/search.store';
import { taskClickedSource$ } from 'src/app/task-edit-main/task-edit/store/edit-task-store.store';
import { FilteredCustomerTaskStoreService } from 'src/app/task-overview-main/store/filtered-task-store.store';
import { CustomerTaskStoreService, deleteTaskSource$ } from '../task-overview/store/task-store.store';


@Injectable({
  providedIn: 'root'
})
export class CustomerTaskOverviewService {
  private searchService = inject(SearchStoreService);
  private filteredTaskService = inject(FilteredCustomerTaskStoreService)
  private taskStoreService = inject(CustomerTaskStoreService)
  private filteredCustomerTaskStore = this.filteredTaskService.filteredCustomerTaskStore

  customerTasks = toSignal(this.filteredCustomerTaskStore.filteredCustomerTasks$)
  taskClicked$ = taskClickedSource$
  deleteTask$ = deleteTaskSource$
  searchChange$ = this.searchService.searchSource$
  deleteTaskAuto$ = this.taskStoreService.deleteTaskSource$
}
