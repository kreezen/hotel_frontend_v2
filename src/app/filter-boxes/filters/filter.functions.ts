import { Customer } from "src/app/data/entities/customer.entity";
import { Filters } from "./filters.interface";

export type FilterFunctions = {
    [P in keyof Filters]: (customers: Array<Customer>) => Array<Customer>;
};

export const filterFunctions: FilterFunctions = {
    taskDone: customers => customers.filter(customer => customer.tasks.every(task => task.isDone)),
    invoicePaid: customers => customers.filter(customer => customer.invoices.every(invoice => invoice.isPaid)),
};