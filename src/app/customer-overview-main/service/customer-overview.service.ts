import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaginationStoreService } from 'src/app/pagination/store/pagination-store.store';
import { SearchService } from 'src/app/search/store/search.store';
import { FilteredCustomerService } from 'src/app/shared-stores/filtered-customer.store';
import { filterToggleSource$ } from '../filter-boxes/store/filter.store';

@Injectable({
  providedIn: 'root'
})
export class CustomerOverviewService {
  private filteredCustomerService = inject(FilteredCustomerService);
  private paginationService = inject(PaginationStoreService);
  private searchService = inject(SearchService);

  searchChange$ = this.searchService.searchSource$
  filterToggle$ = filterToggleSource$
  customers = toSignal(this.filteredCustomerService.filteredCustomerStore.filteredCustomers$)
  changeCurrentPage$ = this.paginationService.changeCurrentPage$
  changeItemsPerPage$ = this.paginationService.changeItemsPerPage$
  paginationState = toSignal(this.paginationService.paginationStore.state$)

}
