export class User {
    name: string;
    email: string;
    siteID: number;
    token: string;
    roles: Array<string>;

    constructor(name: string, email: string, siteID: number, token: string, roles :Array<string>) {
        this.name = name;
        this.email = email;
        this.siteID = siteID;
        this.token = token;
        this.roles = roles;
    }
}