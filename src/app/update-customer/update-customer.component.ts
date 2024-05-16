import { Component, OnInit, inject } from '@angular/core';
import { UpdateCustomerFormComponent } from './update-customer-form/update-customer-form.component';
import { UpdateCustomerStoreService, updateCustomerSource$ } from './store/update-customer-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [UpdateCustomerFormComponent],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  private updateCustomerStoreService = inject(UpdateCustomerStoreService)
  updateCustomerStore = this.updateCustomerStoreService.updateCustomerStore
  customer = toSignal(this.updateCustomerStore.customer$)
  updateCustomerSource$ = updateCustomerSource$

  constructor() {
    const auto = toSignal(this.updateCustomerStoreService.updateCustomerSource$)
  }

}
