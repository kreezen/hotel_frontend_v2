import { Component, Input, OnInit, effect, input, output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { updateCustomerSource$ } from '../store/update-customer-store.service';
import { CommonModule } from '@angular/common';
import { CustomerTypePipe } from 'src/app/pipes/customer-type.pipe';
import { Customer } from 'src/app/domain/customer/customer.entity';

@Component({
  selector: 'app-update-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CustomerTypePipe],
  templateUrl: './update-customer-form.component.html',
  styleUrl: './update-customer-form.component.css'
})
export class UpdateCustomerFormComponent implements OnInit {
  customer = input.required<Customer>()
  updateCustomerClicked = output<Customer>()
  customerFormGroup: FormGroup = new FormGroup({})

  constructor(private formsBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.customerFormGroup = this.createCustomerForm(this.formsBuilder, this.customer())
  }

  createCustomerForm(formsBuilder: FormBuilder, customer: Customer): FormGroup<any> {
    return formsBuilder.group({
      id: [customer.id, Validators.required],
      email: [customer.email, Validators.required],
      customerType: [customer.customerType, Validators.required],
      firstName: [customer.firstName, Validators.required],
      lastName: [customer.lastName, Validators.required],
      address: formsBuilder.group({
        street: [customer.address.street, Validators.required],
        city: [customer.address.city, Validators.required],
        zipCode: [customer.address.zipCode, Validators.required],
      })
    });
  }

  onSubmit() {
    if (this.customerFormGroup.valid) {
      let updateCustomer = this.customerFormGroup.value
      updateCustomer.customerType = parseInt(updateCustomer.customerType)
      this.updateCustomerClicked.emit(updateCustomer)
    }
  }
}
