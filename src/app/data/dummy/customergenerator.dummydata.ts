import { Customer } from '../entities/customer.entity';
import { Invoice } from '../entities/invoice.entity';
import { Task } from '../entities/task.entity';
import { Address } from '../entities/address.entity';

export class CustomerGenerator {

    generateTaskDescription(): string[] {
        return [
            "Thoroughly clean and sanitize guest room according to hotel standards.",
            "Greet guest, verify identification, process payment, and assign room.",
            "Prepare and set up breakfast buffet according to menu and health regulations.",
            "Collect, wash, dry, and fold hotel linens and towels.",
            "Respond to guest maintenance requests (e.g., light bulb replacement, plumbing issues).",
            "Process new reservations, answer guest inquiries, and manage room availability.",
            "Track inventory of linens, cleaning supplies, and guest amenities.",
            "Arrange tables, chairs, decorations, and equipment for banquet or meeting."
        ];
    }

    generateTaskTitel(): string[] {
        return [
            "Room Cleaning",
            "Guest Check-in",
            "Breakfast Preparation",
            "Laundry Service",
            "Maintenance Request",
            "Reservation Handling",
            "Inventory Management",
            "Event Setup"
        ];
    }

    generateCustomers(count: number): Customer[] {
        return Array.from({ length: count }).map((_, index) => this.generateCustomer(index));
    }

    generateCustomer(index: number): Customer {
        const address: Address = {
            id: index + 1, // Simple incremental ID 
            street: `Sample Street ${index + 1}`,
            city: `Sample City`,
            zipcode: 12345 // Placeholder zipcode
        };

        const invoices: Invoice[] = Array.from({ length: Math.floor(Math.random() * 4) + 1 }) // 0-3 invoices
            .map((_, invoiceIndex) => ({
                id: index * 10 + invoiceIndex + 1, // Unique IDs based on customer index
                name: `Invoice ${invoiceIndex + 1}`,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random past date
                isPaid: Math.random() > 0.5, // 50/50 chance paid/unpaid
                sum: Math.random() * 1000, // Random sum under 1000
                tasks: [] // Initialize tasks as an empty array
            }));

        const tasks: Task[] = Array.from({ length: Math.floor(Math.random() * 3) }) // 0-2 tasks
            .map((_, taskIndex) => ({
                id: index * 100 + taskIndex + 1,
                titel: this.generateTaskTitel()[Math.floor(Math.random() * this.generateTaskTitel().length)],
                isDone: Math.random() > 0.5,
                descreption: this.generateTaskDescription()[Math.floor(Math.random() * this.generateTaskDescription().length)] // Use descriptions
            }));

        return {
            id: index + 1,
            name: `Customer ${index + 1}`,
            email: `customer${index + 1}@example.com`,
            address,
            invoices,
            tasks
        };
    }
}

