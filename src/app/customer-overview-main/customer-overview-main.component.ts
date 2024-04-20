import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoxesComponent } from './filter-boxes/filter-boxes.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { FilteredCustomerService } from './store/filtered-customer.store';
import { RouterLink } from '@angular/router';
import { CustomerOverviewService } from './service/customer-overview.service';
import { PaginationComponent } from '../shared-components/pagination/pagination.component';
import { SearchComponent } from '../shared-components/search/search.component';

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

}
