import { Address } from "./address.entity";
import { Invoice } from "./invoice.entity";
import { Task } from "./task.entity";

export interface Customer {
    id: number,
    name: string,
    email: string,
    address: Address
    invoices: Array<Invoice>,
    tasks: Array<Task>
}
// TODO: tasks mit desc
// invoices mit task und müssen auf kunden referenzieren