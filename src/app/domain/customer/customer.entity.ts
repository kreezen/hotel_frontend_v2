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

    constructor(
        id: string,
        activities: Activity[],
        customernumber: string,
        customertype: CustomerType,
        firstname: string,
        lastname: string,
        address: Address
    ) {
        this.id = id;
        this.activities = activities;
        this.customerNumber = customernumber;
        this.customerType = customertype;
        this.firstName = firstname;
        this.lastName = lastname;
        this.address = address;
    }

    static fromJson(json: any): Customer {
        return new Customer(
            json.id,
            json.activities,
            json.customerNumber,
            json.customerType,
            json.firstName,
            json.lastName,
            json.address
        );
    }
}

// TODO: tasks mit desc
// invoices mit task und müssen auf kunden referenzieren