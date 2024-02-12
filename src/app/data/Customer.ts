import { Adress } from "./Adress";
import { Invoice } from "./Invoice";
import { Task } from "./Task";

export interface Customer {
    id: number,
    name: string,
    email: string,
    adress: Adress
    invoices: Array<Invoice>,
    tasks: Array<Task>
}