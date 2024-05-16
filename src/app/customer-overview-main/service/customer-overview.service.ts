import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { FilteredCustomerStoreService } from 'src/app/customer-overview-main/store/filtered-customer.store';
import { filterToggleSource$ } from '../filter-boxes/store/filter.store';
import { PaginationStoreService } from 'src/app/shared-components/pagination/store/pagination-store.store';
import { SearchStoreService } from 'src/app/shared-components/search/store/search.store';
import { CustomerStoreService, deleteCustomerSource$ } from '../customer-overview/store/customer-store.store';
import { editCustomerClickedSource$ } from 'src/app/update-customer/store/update-customer-store.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerOverviewService {
  private filteredCustomerService = inject(FilteredCustomerStoreService);
  private paginationService = inject(PaginationStoreService);
  private searchService = inject(SearchStoreService);
  private customerService = inject(CustomerStoreService);


  deleteCustomerState$ = this.customerService.deleteCustomerSource$
  editCustomerClicked$ = editCustomerClickedSource$
  deleteCustomerSource$ = deleteCustomerSource$
  searchChange$ = this.searchService.searchSource$
  filterToggle$ = filterToggleSource$
  customers = toSignal(this.filteredCustomerService.filteredCustomerStore.filteredCustomers$)
  changeCurrentPage$ = this.paginationService.changeCurrentPage$
  changeItemsPerPage$ = this.paginationService.changeItemsPerPage$
  paginationState = toSignal(this.paginationService.paginationStore.state$)
}
