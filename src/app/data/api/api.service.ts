import { Injectable, inject } from '@angular/core';
import { IApi } from './api.interface';
import { Observable, map, tap } from 'rxjs';
import { Customer } from '../../domain/customer/customer.entity';
import { API_URL } from './config/api.config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/domain/user/user.entity';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApi {

  private baseUrl = inject(API_URL);
  //private genrateCustomer = new CustomerGenerator()

  constructor(private http: HttpClient) { }
  getCustomerBySubstring(lastname: string): Observable<Customer[]> {
    console.log(`${this.baseUrl}/customers/search/${lastname}`)
    return this.http.get<any[]>(`${this.baseUrl}/customers/search/${lastname}`).pipe(

      map(
        val => {
          return val.map((customer) => {
            return Customer.fromJson(customer);
          })
        }
      ),
      tap((res) => console.log(res)),
    )
  }
  getUsersBySubstring(username: string): Observable<User[]> {
    console.log(`${this.baseUrl}/users/search/${username}`)
    return this.http.get<any[]>(`${this.baseUrl}/users/search/${username}`).pipe(
      tap((res) => console.log(res)),
    )
  }

  getAllCustomers(): Observable<Array<Customer>> {
    console.log(`${this.baseUrl}/customers`)
    return this.http.get<any[]>(`${this.baseUrl}/customers`).pipe(
      map(
        val => {
          return val.map((customer) => {
            return Customer.fromJson(customer);
          })
        }
      ),
      tap((res) => console.log(res)),
    )
  }

}
