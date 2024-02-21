import { Customer } from "src/app/data/entities/customer.entity";

export const filterFunctions: Record<string, (customers: Customer[]) => Customer[]> = {
    taskDone: customers => customers.filter(customer => customer.tasks.every(task => task.isDone)),
    invoicePaid: customers => customers.filter(customer => customer.invoices.every(invoice => invoice.isPaid)),
};