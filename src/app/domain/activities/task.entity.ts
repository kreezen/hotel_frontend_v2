import { User } from "../user/user.entity";
import { Activity } from "./activity.entity";

export interface CreateTask {
    customerId: string
    description: string
    assignedTo: User
    dueDate: Date
    createdBy: User
}
export class Task extends Activity {

    assignedTo: User
    dueDate: Date
    isCompleted: boolean

    constructor(
        customerId: string,
        createdOn: Date,
        modifiedOn: Date,
        createdBy: User,
        modifiedBy: User,
        description: string,
        assignedTo: User,
        dueDate: Date,
        isCompleted: boolean,
    ) {
        super(customerId, description, createdOn, createdBy, modifiedOn, modifiedBy);
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    static initState(): Task {
        return {
            customerId: "",
            createdOn: new Date(),
            modifiedOn: new Date(),
            createdBy: {
                id: "",
                username: "",
            },
            modifiedBy: {
                id: "",
                username: "",
            },
            description: "",
            assignedTo: {
                id: "",
                username: "",
            },
            dueDate: new Date(),
            isCompleted: false
        }
    }

    static override fromJson(json: any): Task {
        return new Task(
            json.customerId,
            new Date(json.createdOn),
            new Date(json.modifiedOn),
            User.fromJson(json.createdBy),
            User.fromJson(json.modifiedBy),
            json.description,
            User.fromJson(json.assignedTo),
            new Date(json.dueDate),
            json.isCompleted
        );
    }
}
