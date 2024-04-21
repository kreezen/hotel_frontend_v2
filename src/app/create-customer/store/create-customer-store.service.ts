import { Injectable, inject } from '@angular/core';
import { Source } from '@state-adapt/rxjs';
import { catchError, of, switchMap, tap } from 'rxjs';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';
import { CustomerType } from 'src/app/domain/customer/customertype.enum';
import { Address } from 'src/app/domain/customer/address.entity';
import { ApiService } from 'src/app/api/api.service';

export interface CreateCustomer {
  fistName: string,
  lastName: string,
  email: string,
  customerType: CustomerType,
  address: Address
}

export const createCustomerSource$ = new Source<CreateCustomer>('[create customer] createCustomerSource$');
@Injectable({
  providedIn: 'root'
})

export class CreateCustomerStoreService {

  private apiService = inject(ApiService)
  createCustomer$ = createCustomerSource$.pipe(
    switchMap((createCustomer) => this.apiService.createCustomer(createCustomer.payload)),
    catchError((err) => {
      toastMessageSource$.next({ message: 'Kunde konnte nicht erstellt werden', type: 'error' })
      return of(err)
    }),
    tap((data) => {
      if (!(data instanceof Error)) {
        toastMessageSource$.next({ message: 'Kunde wurde erfolgreich erstellt', type: 'success' })
        refreshSource$.next(true)
      }
    })
  )
}
