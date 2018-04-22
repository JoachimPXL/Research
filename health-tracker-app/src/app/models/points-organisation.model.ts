import { Organisation } from "./organisation.model";

export class OrganisationTotal {
    Organisation: Organisation;
    points: object;
    
    constructor(Organisation: Organisation, points: object) {
        this.Organisation = Organisation;
        this.points = points
    }
}
