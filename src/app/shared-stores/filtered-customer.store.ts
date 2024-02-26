import { Injectable, inject } from '@angular/core';


import { joinStores } from '@state-adapt/rxjs';

import { SearchService } from '../search/store/search.store';
import { CustomerStoreService } from '../customer-overview-main/customer-overview/store/customer-store.store';
import { Filters } from '../customer-overview-main/filter-boxes/filters/filters.interface';
import { FilterService } from '../customer-overview-main/filter-boxes/store/filter.store';
import { filterFunctions } from '../customer-overview-main/filter-boxes/filters/filter.functions';

@Injectable({
  providedIn: 'root'
})
export class FilteredCustomerService {
  private filterService = inject(FilterService);
  private customerService = inject(CustomerStoreService);
  private searchService = inject(SearchService);

  private filterStore = this.filterService.filterStore;
  private customerStore = this.customerService.customerStore;
  private searchStore = this.searchService.searchStore;

  filteredCustomerStore = joinStores({
    customers: this.customerStore,
    filters: this.filterStore,
    searchStore: this.searchStore
  })({
    filteredCustomers: state => {
      const customers = state.customers.customers;
      const activeFilters = Object.entries(state.filters).filter(([key, value]) => value) as [keyof Filters, boolean][];
      const searchTerm = state.searchStore;
      const preFiltredCustomers = customers.filter(customers => customers.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return activeFilters.reduce((preFiltredCustomers, [filterName, isActive]) => {
        if (!isActive) return customers;
        return filterFunctions[filterName](customers);
      }, preFiltredCustomers);
    }
  })();

}
