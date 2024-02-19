import { Injectable, inject } from '@angular/core';
import { FilterService } from '../filter-boxes/store/filter.service';
import { CustomerStoreService } from '../customer-overview/store/customer-store.service';
import { joinStores } from '@state-adapt/rxjs';
import { Filters } from '../filter-boxes/filters/filters.interface';
import { filterFunctions, filterFunctions2 } from '../filter-boxes/filters/filter.functions';
import { SearchService } from '../search/store/search.service';

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
        return filterFunctions2[filterName](customers);
      }, preFiltredCustomers);
    }
  })();

}
