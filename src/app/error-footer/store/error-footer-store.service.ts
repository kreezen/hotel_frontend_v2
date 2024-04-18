import { Injectable, inject } from '@angular/core';
import { joinStores } from '@state-adapt/rxjs';
import { CustomerStoreService } from 'src/app/customer-overview-main/customer-overview/store/customer-store.store';
import { UserAccStoreService } from 'src/app/header/user-acc/store/user-acc-store.service';


export interface ErrorFooterState {
  customerErr: string,
  userErr: string
}

@Injectable({
  providedIn: 'root'
})
export class ErrorFooterStoreService {
  customerStore = inject(CustomerStoreService).customerStore
  userStore = inject(UserAccStoreService).usersStore

  errorFooterStore = joinStores({
    users: this.userStore,
    customers: this.customerStore
  })({
    footerErrors: state => {
      const customers = state.customers.customers
      const users = state.users.users
      return {
        customerErr: customers.length === 0 ? 'No customers found, Pls add some' : '',
        userErr: users.length === 0 ? 'No users found, Pls add some' : ''
      }
    }
  })()
}
