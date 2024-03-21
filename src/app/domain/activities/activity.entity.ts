import { User } from "../user/user.entity";

export class Activity {
    id: string;
    description: string;
    createdOn: Date;
    modifiedOn: Date;
    createdBy: User;
    modifiedBy: User;

    constructor(
        id: string,
        description: string,
        createdOn: Date,
        createdBy: User,
        modifiedOn: Date,
        modifiedBy: User
    ) {
        this.id = id;
        this.description = description;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.modifiedOn = modifiedOn;
        this.modifiedBy = modifiedBy;
    }
}