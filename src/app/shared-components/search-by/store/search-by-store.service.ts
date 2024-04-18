import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';

import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { User } from 'src/app/domain/user/user.entity';

export const userNameSearchSource$ = new Source<string>('[search-by-user] userNameSource$');
export const customerNameSearchSource$ = new Source<string>('[search-by-customer] customerNameSource$');
/* export const userNameSeachSource$ = new BehaviorSubject<string>('');  */
export interface SearchByUser {
  users: Array<User>
}

export interface SearchByCustomer {
  customers: Array<Customer>
}

const initSearchByUserState: SearchByUser = {
  users: []
}

const initSearchByCustomerState: SearchByCustomer = {
  customers: []
}

@Injectable({
  providedIn: 'root'
})
export class SearchByStoreService {
  apiService = inject(ApiService);
  users$ = userNameSearchSource$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((userName) => this.apiService.getUsersBySubstring(userName.payload)),
    toSource('[search-by] users$'),
  )

  customers$ = customerNameSearchSource$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((lastname) => this.apiService.getCustomerBySubstring(lastname.payload)),
    toSource('[search-by] users$'),
  )

  searchByUserStore = adapt(initSearchByUserState, {
    adapter: {
      users: (state, users) => ({ ...state, users }),
    },
    sources: {
      users: this.users$
    }
  })


  searchByCustomerStore = adapt(initSearchByCustomerState, {
    adapter: {
      customers: (state, customers) => ({ ...state, customers }),
    },
    sources: {
      customers: this.customers$
    }
  })
}
