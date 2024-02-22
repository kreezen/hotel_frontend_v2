import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { FilterBoxesComponent } from './filter-boxes/filter-boxes.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaginationStoreService } from '../pagination/store/pagination-store.service';
import { SearchService } from '../search/store/search.service';
import { FilteredCustomerService } from '../shared-stores/filtered-customer.service';
import { CustomerStoreService } from './customer-overview/store/customer-store.service';
import { FilterService } from './filter-boxes/store/filter.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-overview-main',
  standalone: true,
  providers: [FilteredCustomerService],
  imports: [CommonModule, PaginationComponent, SearchComponent, FilterBoxesComponent, CustomerOverviewComponent, RouterLink],
  templateUrl: './customer-overview-main.component.html',
  styleUrls: ['./customer-overview-main.component.css']
})
export class CustomerOverviewMainComponent {
  private filterService = inject(FilterService);
  private filteredCustomerService = inject(FilteredCustomerService);
  private customerService = inject(CustomerStoreService);
  private paginationService = inject(PaginationStoreService);
  private searchService = inject(SearchService);

  searchChange$ = this.searchService.searchSource$
  filterToggle$ = this.filterService.filterToggleSource$
  customers = toSignal(this.filteredCustomerService.filteredCustomerStore.filteredCustomers$)
  changeCurrentPage$ = this.paginationService.changeCurrentPage$
  changeItemsPerPage$ = this.paginationService.changeItemsPerPage$
  paginationState = toSignal(this.paginationService.paginationStore.state$)


  constructor() {
    console.log('CustomerOverviewMainComponent created')
  }
}
