import { User } from "../user/user.entity";

export class Activity {
    customerId: string;
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
        this.customerId = id;
        this.description = description;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.modifiedOn = modifiedOn;
        this.modifiedBy = modifiedBy;
    }

    static fromJson(json: any): Activity {
        return new Activity(
            json.id,
            json.description,
            new Date(json.createdOn),
            User.fromJson(json.createdBy),
            new Date(json.modifiedOn),
            User.fromJson(json.modifiedBy)
        );
    }
}