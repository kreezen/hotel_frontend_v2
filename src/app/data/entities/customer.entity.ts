import { Adress } from "./address.entity";
import { Invoice } from "./invoice.entity";
import { Task } from "./task.entity";

export interface Customer {
    id: number,
    name: string,
    email: string,
    address: Adress
    invoices: Array<Invoice>,
    tasks: Array<Task>
}