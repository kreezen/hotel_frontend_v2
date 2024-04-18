import { Observable } from "rxjs";
import { Customer } from "../../domain/customer/customer.entity";
import { User } from "src/app/domain/user/user.entity";
import { CreateTask, Task } from "src/app/domain/activities/task.entity";
import { CreateCustomer } from "src/app/create-customer/store/create-customer-store.service";
import { CreateUser } from "src/app/create-user/store/create-user-store.service";

export interface IApi {
    getAllCustomers(): Observable<Array<Customer>>
    getCustomerBySubstring(lastname: string): Observable<Array<Customer>>
    getUsersBySubstring(username: string): Observable<Array<User>>
    updateTask(task: Task): Observable<Task>
    getAllTasks(): Observable<Array<Task>>
    createTask(creatTask: CreateTask): Observable<Task>
    createCustomer(customer: CreateCustomer): Observable<Customer>
    createUser(createUser: CreateUser): Observable<User>
    getAllUsers(): Observable<Array<User>>
}