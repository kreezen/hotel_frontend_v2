import { Component, OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FilterService } from './filter-boxes/store/filter.service';
import { CustomerStoreService } from './customer-overview/store/customer-store.service';
import { PaginationStoreService } from './pagination/store/pagination-store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilteredCustomerService } from './shared-stores/filtered-customer.service';
import { SearchService } from './search/store/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private filterService = inject(FilterService);
  private filteredCustomerService = inject(FilteredCustomerService);
  private customerService = inject(CustomerStoreService);
  private paginationService = inject(PaginationStoreService);
  private searchService = inject(SearchService);

  filterToggle$ = this.filterService.filterToggleSource$
  customers = toSignal(this.filteredCustomerService.filteredCustomerStore.filteredCustomers$)
  changeCurrentPage$ = this.paginationService.changeCurrentPage$
  changeItemsPerPage$ = this.paginationService.changeItemsPerPage$
  paginationState = toSignal(this.paginationService.paginationStore.state$)
  searchChange$ = this.searchService.searchSource$

  ngOnInit(): void {
    initFlowbite();
  }
  title = 'hotel_frontend_v2';
}
