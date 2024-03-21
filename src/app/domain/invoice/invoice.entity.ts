import { Activity } from "../activities/activity.entity";


export interface Invoice {
    id: string,
    invoiceDate: Date,
    createdOn: Date,
    invoiceNumber: boolean,
    tasks: Array<Activity>
}
