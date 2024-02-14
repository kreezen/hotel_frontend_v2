import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';

import { map, catchError, of } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { Customer } from 'src/app/data/entities/customer.entity';
import { PageinationState, PaginationStoreService, paginationSources } from 'src/app/pagination/store/pagination-store.service';


export interface CustomerState {
  customers: Customer[];
  error: string;
}

export interface CustomerPaginationState {
  customerStore: CustomerState,
  paginationStore: PageinationState
}

const initState: CustomerState = {
  customers: [],
  error: "",
}


@Injectable({
  providedIn: 'root'
})

export class CustomerStoreService {

  apiService = inject(ApiService)
  paginationService = inject(PaginationStoreService)

  sourcePagination$ = new Source<number>('changeCurrenPage$');
  sourceItemsPage$ = new Source<number>('changeItemsPage$');

  sourceCustomer$ = this.apiService.getAllCustomers()
    .pipe(
      map(
        v => {
          return {
            ...initState,
            customers: v
          }
        }
      ),
      catchError(error => {
        return of({
          ...initState,
          error: error.message
        });
      }),
      toSource('[getCustomers] sourceCustomer$'),
    )

  cutomerPaginationStore = adapt({
    customerStore: initState,
    paginationStore: {
      currentPage: 1,
      itemsPerPage: 10
    }
  }, {
    adapter: {
      loadCustomers: (state, newState) => {
        return { ...state, customerStore: newState }
      },
      setCurrentP: (state, currentPage: number) => {
        console.log('state', currentPage);
        return { ...state, paginationStore: { ...state.paginationStore, currentPage } }
      },
      setItemsPerP: (state, itemsPerPage: number) => {
        console.log('state', itemsPerPage);
        return { ...state, paginationStore: { ...state.paginationStore, itemsPerPage } }
      },
      selectors: {
        customerPagination: state => state.customerStore.customers
          .slice((state.paginationStore.currentPage - 1) * state.paginationStore.itemsPerPage, state.paginationStore.itemsPerPage * state.paginationStore.currentPage)
      }
    },
    sources: {
      loadCustomers: this.sourceCustomer$,
      setCurrentP: paginationSources.changeCurrentPage$,
      setItemsPerP: paginationSources.changeItemsPerPage$
    }
  })

  /* customerStore = adapt(initState, {
    adapter: {
      loadCustomers: (state, newState) => {
        return newState
      },
      selectors: {
        showCustomers: state => state.customers
      }
    },
    sources: {
      loadCustomers: this.sourceCustomer$
    }
  }) */

}
