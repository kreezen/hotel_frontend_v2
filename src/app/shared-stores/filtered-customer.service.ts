import { Injectable, inject } from '@angular/core';
import { FilterService } from '../filter-boxes/store/filter.service';
import { CustomerStoreService } from '../customer-overview/store/customer-store.service';
import { joinStores } from '@state-adapt/rxjs';
import { Filters } from '../filter-boxes/filters/filters.interface';
import { filterFunctions } from '../filter-boxes/filters/filter.functions';

@Injectable({
  providedIn: 'root'
})
export class FilteredCustomerService {
  private filterService = inject(FilterService);
  private customerService = inject(CustomerStoreService);

  private filterStore = this.filterService.filterStore;
  private customerStore = this.customerService.customerStore;

  filteredCustomerStore = joinStores({
    customers: this.customerStore,
    filters: this.filterStore,
  })({
    filteredCustomers: state => {
      const customers = state.customers.customers;
      const activeFilters = Object.entries(state.filters).filter(([key, value]) => value) as [keyof Filters, boolean][];
      return activeFilters.reduce((customers, [filterName, isActive]) => {
        if (!isActive) return customers;
        return filterFunctions[filterName](customers);
      }, customers);
    }
  })();

}
