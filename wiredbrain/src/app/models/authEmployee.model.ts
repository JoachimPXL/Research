import { Employee } from "./employee.model";

export class AuthUser {
    id: string;
    ttl: string;
    created: string;
    userId: string;
    user: Employee;

    constructor(id: string, ttl: string, created: string, userId, user: Employee) {
        this.id = id;
        this.ttl = ttl;
        this.created = created;
        this.userId = userId;
        this.user = user;
    }
}