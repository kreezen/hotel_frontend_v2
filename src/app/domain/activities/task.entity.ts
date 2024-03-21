import { User } from "../user/user.entity";
import { Activity } from "./activity.entity";

export class Task extends Activity {

    assignedTo: User
    dueDate: Date
    isCompleted: boolean

    constructor(
        id: string,
        createdOn: Date,
        modifiedOn: Date,
        createdBy: User,
        modifiedBy: User,
        description: string,
        assignedTo: User,
        dueDate: Date,
        isCompleted: boolean,
    ) {
        super(id, description, createdOn, createdBy, modifiedOn, modifiedBy);
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    static initState(): Task {
        return {
            id: "",
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
}
