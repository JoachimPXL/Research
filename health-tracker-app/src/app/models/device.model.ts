export class Device {
    id: string;
    accessToken: string;
    name: string;

    constructor(id: string, accessToken: string, name: string) {
        this.id = id;
        this.accessToken = accessToken;
        this.name = name;
    }
}
