export class User {
    name: string;
    email: string;
    token: string;
    roles: Array<string>;

    constructor(name: string, email: string, token: string, roles :Array<string>) {
        this.name = name;
        this.email = email;
        this.token = token;
        this.roles = roles;
    }
}