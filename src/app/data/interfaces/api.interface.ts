import { Observable } from "rxjs";
import { Customer } from "../entities/customer.entity";

export interface IApi {
    getAllCustomers(): Observable<Array<Customer>>
    getCustomerByName(name: string): Observable<Customer>
}