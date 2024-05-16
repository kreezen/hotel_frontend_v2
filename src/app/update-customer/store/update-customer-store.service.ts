import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { BehaviorSubject, catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';

interface CustomerEditState {
  customer: Customer
}

const initState: CustomerEditState = {
  customer: Customer.dummy()
}

export const editCustomerClickedSource$ = new BehaviorSubject<Customer>(initState.customer);
export const updateCustomerSource$ = new Source<Customer>('[update customer] updateCustomerSource$');
@Injectable({
  providedIn: 'root'
})

export class UpdateCustomerStoreService {
  private apiService = inject(ApiService)

  editCustomerClickedSource$ = editCustomerClickedSource$.pipe(
    tap((val) => console.log(val)),
    toSource('[edit customer] editCustomerClickedSource$')
  )
  updateCustomerSource$ = updateCustomerSource$.pipe(
    switchMap((val) => this.apiService.updateCustomer(val.payload).pipe(
      catchError((err) => {
        toastMessageSource$.next({ message: 'Kunde konnte nicht geupdatet werden', type: 'error' })
        return of(err)
      }),
      tap((data) => {
        if (!(data instanceof Error || data instanceof HttpErrorResponse)) {
          toastMessageSource$.next({ message: 'Kunde wurde erfolgreich geupdatet', type: 'success' })
          refreshSource$.next(true)
        }
      })
    ))
  )

  updateCustomerStore = adapt(
    initState,
    {
      adapter: {
        customer: (state, newCustomer) => {
          return { ...state, customer: newCustomer }
        },
        selectors: {
          customer: (state) => state.customer
        }
      },
      sources: {
        customer: this.editCustomerClickedSource$
      }
    },
  )
}
