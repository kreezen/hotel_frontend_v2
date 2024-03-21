import { Observable } from "rxjs";
import { Customer } from "../../domain/customer/customer.entity";
import { User } from "src/app/domain/user/user.entity";

export interface IApi {
    getAllCustomers(): Observable<Array<Customer>>
    getCustomerByName(name: string): Observable<Customer>
    getUsersBySubstring(username: string): Observable<Array<User>>
}