import { Task } from "src/app/domain/activities/task.entity";
import { Customer } from "src/app/domain/customer/customer.entity";

export const filterFunctions: Record<string, (customers: Customer[]) => Customer[]> = {
    taskDone: customers => customers.filter(customer => customer.activities.every((task) => (task as Task)?.isCompleted)),
    invoicePaid: customers => customers.filter(customer => customer.activities.every(invoice => invoice.modifiedBy)),
};