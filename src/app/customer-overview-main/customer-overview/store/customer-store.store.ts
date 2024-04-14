import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';

import { map, catchError, of, switchMap } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { PageinationState, PaginationStoreService, paginationSources } from 'src/app/pagination/store/pagination-store.store';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';


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

  sourceCustomer$ =
    refreshSource$.pipe(
      switchMap(() => this.apiService.getAllCustomers()
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
        )),
    )

  /* constructor() {
    refreshSource$.next();
  } */

  customerStore = adapt(initState, {
    adapter: {
      loadCustomers: (state, newState) => {
        return newState
      },
      selectors: {
        customers: state => state.customers,
        customerArrlength: state => state.customers.length,
        tasks: state => state.customers.map(customer => customer.activities).flatMap(task => task),
      }
    },
    sources: {
      loadCustomers: this.sourceCustomer$
    }
  })

}
