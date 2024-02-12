import * as faker from 'faker';
import { Customer } from '../entities/customer.entity';
import { Invoice } from '../entities/invoice.entity';
import { Task } from '../entities/task.entity';
import { Address } from '../entities/address.entity';

export class CustomerGenerator {
    generateCustomers(count: number): Customer[] {
        return Array.from({ length: count }).map(() => this.generateCustomer());
    }
    generateCustomer(): Customer {
        const address: Address = {
            id: faker.datatype.number(),
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            zipcode: faker.address.zipCode()
        };

        const invoices: Invoice[] = Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }).map(() => ({
            id: faker.datatype.number(),
            name: faker.commerce.productName(),
            date: faker.date.past(),
            isPaid: faker.datatype.boolean(),
            sum: faker.datatype.number()
        }));

        // Similar Logic to generate Tasks
        const tasks: Task[] = Array.from({ length: faker.datatype.number({ min: 0, max: 3 }) }).map(() => ({
            id: faker.datatype.number(),
            name: faker.lorem.sentence(3),
            isDone: faker.datatype.boolean()
        }));

        return {
            id: faker.datatype.number(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            address,
            invoices,
            tasks
        };
    }
}