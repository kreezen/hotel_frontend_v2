import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { FilterBoxesComponent } from './filter-boxes/filter-boxes.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaginationStoreService } from '../pagination/store/pagination-store.store';
import { SearchService } from '../search/store/search.store';
import { FilteredCustomerService } from '../shared-stores/filtered-customer.store';
import { RouterLink } from '@angular/router';
import { CustomerOverviewService } from './service/customer-overview.service';

@Component({
  selector: 'app-customer-overview-main',
  standalone: true,
  providers: [FilteredCustomerService],
  imports: [CommonModule, PaginationComponent, SearchComponent, FilterBoxesComponent, CustomerOverviewComponent, RouterLink],
  templateUrl: './customer-overview-main.component.html',
  styleUrls: ['./customer-overview-main.component.css']
})
export class CustomerOverviewMainComponent {
  private customerOverviewService = inject(CustomerOverviewService);

  searchChange$ = this.customerOverviewService.searchChange$
  filterToggle$ = this.customerOverviewService.filterToggle$
  customers = this.customerOverviewService.customers
  changeCurrentPage$ = this.customerOverviewService.changeCurrentPage$
  changeItemsPerPage$ = this.customerOverviewService.changeItemsPerPage$
  paginationState = this.customerOverviewService.paginationState

  constructor() {
    console.log('CustomerOverviewMainComponent created')
  }
}
