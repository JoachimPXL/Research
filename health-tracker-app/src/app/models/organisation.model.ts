export class Organisation {
    id: string;
    name: string;
    pointsName: string;

    constructor(id: string, pointsName: string, name: string) {
        this.id = id;
        this.pointsName = pointsName;
        this.name = name;
    }
}
