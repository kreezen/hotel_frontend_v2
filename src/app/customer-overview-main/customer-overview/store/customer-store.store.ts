import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { map, catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

import { Customer } from 'src/app/domain/customer/customer.entity';
import { PageinationState } from 'src/app/shared-components/pagination/store/pagination-store.store';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';


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

export const deleteCustomerSource$ = new Source<string>('[delete customer] deleteCustomerSource$');


@Injectable({
  providedIn: 'root'
})

export class CustomerStoreService {

  apiService = inject(ApiService)
  deleteCustomerSource$ = deleteCustomerSource$.pipe(
    switchMap((val) => this.apiService.deleteCustomer(val.payload).pipe(
      catchError((err) => {
        toastMessageSource$.next({ message: 'Kunde konnte nicht gelöscht werden', type: 'error' })
        return of(err)
      }),
      tap((data) => {
        if (!(data instanceof Error || data instanceof HttpErrorResponse)) {
          toastMessageSource$.next({ message: 'Kunde erfolgreich gelöscht', type: 'success' })
          refreshSource$.next(true)
        }
      })
    )
    ));

  getAllCustomersSource$ =
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
      loadCustomers: this.getAllCustomersSource$
    }
  })

}
