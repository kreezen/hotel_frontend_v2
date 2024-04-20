import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { FilteredCustomerService } from 'src/app/customer-overview-main/store/filtered-customer.store';
import { filterToggleSource$ } from '../filter-boxes/store/filter.store';
import { PaginationStoreService } from 'src/app/shared-components/pagination/store/pagination-store.store';
import { SearchService } from 'src/app/shared-components/search/store/search.store';

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
