import { Injectable, inject } from '@angular/core';
import { IApi } from '../interfaces/api.interface';
import { Observable, of, throwError } from 'rxjs';
import { Customer } from '../entities/customer.entity';
import { API_URL } from './config/api.config';
import { HttpClient } from '@angular/common/http';
import { CustomerGenerator } from '../dummy/customergenerator.dummydata';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApi {

  private apiUrl = inject(API_URL);
  private genrateCustomer = new CustomerGenerator()

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return of(this.genrateCustomer.generateCustomers(100))
  }
  getCustomerByName(name: string): Observable<Customer> {
    throw new Error('Method not implemented.');
  }
}
