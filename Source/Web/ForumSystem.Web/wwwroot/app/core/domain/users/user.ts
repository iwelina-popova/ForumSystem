export class User {
    Id: string;
    Username: string;
    AuthKey: string;

    constructor(id: string,
        username: string,
        authKey: string) {
        this.Id = id;
        this.Username = username;
        this.AuthKey = authKey;
    }
}