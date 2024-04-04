import { Injectable, inject } from '@angular/core';
import { IApi } from './api.interface';
import { Observable, map, tap } from 'rxjs';
import { Customer } from '../../domain/customer/customer.entity';
import { API_URL } from './config/api.config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/domain/user/user.entity';
import { CreateTask, Task } from 'src/app/domain/activities/task.entity';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApi {

  private baseUrl = inject(API_URL);
  constructor(private http: HttpClient) { }

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
