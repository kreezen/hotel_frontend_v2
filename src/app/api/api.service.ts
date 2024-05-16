import { Injectable, inject } from '@angular/core';
import { IApi } from './api.interface';
import { Observable, map, tap } from 'rxjs';

import { API_URL } from './config/api.config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/domain/user/user.entity';
import { CreateTask, Task } from 'src/app/domain/activities/task.entity';
import { CreateUser } from 'src/app/create-user/store/create-user-store.service';
import { CreateCustomer } from 'src/app/create-customer/store/create-customer-store.service';
import { Customer } from '../domain/customer/customer.entity';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApi {

  private baseUrl = inject(API_URL);
  constructor(private http: HttpClient) { }
  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.baseUrl}/customers/delete/${id}`).pipe(
      map(
        val => {
          return Customer.fromJson(val)
        }
      )
    )
  }
  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/activities/task/delete/${id}`).pipe(
      map(
        val => {
          return Task.fromJson(val)
        }
      )
    )
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers/update`, customer).pipe(
      map(
        val => {
          return Customer.fromJson(val)
        }
      ),
      tap((res) => console.log(res)),
    )
  }
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/users/delete/${id}`).pipe(
      map(
        val => {
          return User.fromJson(val)
        }
      )
    )
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      map(
        val => {
          return val.map((user) => {
            return User.fromJson(user);
          })
        }
      ),
      tap((res) => console.log(res)),
    )
  }

  createUser(createUser: CreateUser): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/create`, createUser).pipe(
      map(
        val => {
          return User.fromJson(val)
        }
      ),
      tap((res) => console.log(res)),
    )
  }
  createCustomer(customer: CreateCustomer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers/create`, customer).pipe(
      map(
        val => {
          return Customer.fromJson(val)
        }
      ),
      tap((res) => console.log(res)),
    )
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/activities/task/update`, task).pipe(
      map(
        val => {
          return Task.fromJson(val)
        }
      ),
      tap((res) => console.log(res)),
    )
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/activities/task`).pipe(
      map(
        val => {
          return val.map((task) => {
            return Task.fromJson(task);
          })
        }
      ),
      tap((res) => console.log(res)),
    )
  }

  createTask(creatTask: CreateTask): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/activities/task/create`, creatTask).pipe(
      map(
        val => {
          return Task.fromJson(val)
        }
      ),
      tap((res) => console.log(res)),
    )
  }
  getCustomerBySubstring(lastname: string): Observable<Customer[]> {
    console.log(`${this.baseUrl}/customers/search/${lastname}`)
    return this.http.get<Customer[]>(`${this.baseUrl}/customers/search/${lastname}`).pipe(
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
    return this.http.get<User[]>(`${this.baseUrl}/users/search/${username}`).pipe(
      tap((res) => console.log(res)),
      map(
        val => {
          return val.map((user) => {
            return User.fromJson(user);
          })
        }
      ),
    )
  }

  getAllCustomers(): Observable<Array<Customer>> {
    console.log(`${this.baseUrl}/customers`)
    return this.http.get<Array<Customer>>(`${this.baseUrl}/customers`).pipe(
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
