import { Activity } from "../activities/activity.entity";
import { Address } from "./address.entity";
import { CustomerType } from "./customertype.enum";


export class Customer {
    id: string;
    activities: Activity[];
    customerNumber: string;
    customerType: CustomerType;
    firstName: string;
    lastName: string;
    address: Address;
    email: string;

    constructor(
        id: string,
        activities: Activity[],
        customernumber: string,
        customertype: CustomerType,
        firstname: string,
        lastname: string,
        address: Address,
        email: string
    ) {
        this.id = id;
        this.activities = activities;
        this.customerNumber = customernumber;
        this.customerType = customertype;
        this.firstName = firstname;
        this.lastName = lastname;
        this.address = address;
        this.email = email
    }

    static fromJson(json: any): Customer {
        return new Customer(
            json.id,
            json.activities,
            json.customerNumber,
            json.customerType,
            json.firstName,
            json.lastName,
            json.address,
            json.email
        );
    }

    static dummy(): Customer {
        return new Customer("id", [], "1234", CustomerType.PERSON, "Max", "Mustermann", { id: 1, street: "Musterstraße", city: "Musterstadt", zipCode: 12345 }, "HJhKs@example.com");
    }
}

// TODO: tasks mit desc
// invoices mit task und müssen auf kunden referenzieren