
export class User {
    id: string;
    username: string;

    constructor(id: string, username: string) {
        this.id = id;
        this.username = username;
    }

    static fromJson(json: any): User {
        return new User(json.id, json.username);
    }
}

export const initUser = new User('', '');