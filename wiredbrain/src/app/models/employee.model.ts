import { Device } from "./device.model";
import { Organisation } from "./organisation.model";

export class Employee {
    id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    nickname: string;
    points: number;
    title: string;
    profilePicture: string;
    password: string;
    devices: Device[];
    activities: object; 
    Organisation: Organisation;
    //organisation TODO
    //devices TODO
    //activities TODO

    constructor(id: string, email: string, role: string, firstName: string, lastName: string,
         nickname: string, points: number, title: string, profilePicture: string, password:string, devices: Device[], activities = {}, Organisation: Organisation ) {
        this.id = id;
        this.email = email;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname; 
        this.points = points;
        this.title = title;
        this.profilePicture = profilePicture;
        this.password = password;
        this.devices = devices;
        this.activities = activities;
        this.Organisation = Organisation;
    }

    
}
