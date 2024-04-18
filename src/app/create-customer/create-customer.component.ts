import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTypePipe } from '../pipes/customer-type.pipe';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateCustomer, CreateCustomerStoreService, createCustomerSource$ } from './store/create-customer-store.service';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [CommonModule, CustomerTypePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  createCustomer$ = inject(CreateCustomerStoreService).createCustomer$
  @Output() createCustomer = new EventEmitter<CreateCustomer>()
  customerFormGroup: FormGroup;

  constructor(formsBuilder: FormBuilder) {
    this.customerFormGroup = this.createCustomerForm(formsBuilder)
    const asd = toSignal(this.createCustomer$)
  }

  createCustomerForm(formsBuilder: FormBuilder): FormGroup<any> {
    return formsBuilder.group({
      email: ['', Validators.required],
      customerType: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: formsBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: [, Validators.required],
      })
    })
  }

  onSubmit() {
    if (this.customerFormGroup.valid) {
      let createCustomer = this.customerFormGroup.value
      createCustomer.customerType = parseInt(createCustomer.customerType)
      console.log(createCustomer)
      //this.createCustomer.emit(customer)
      createCustomerSource$.next(createCustomer)
    }
  }

}
