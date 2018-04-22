// EXAMPLE JSON
// { 
//     "id": "GiYTzoM59u9sxa4l5zl1vi2k6PAUPvcKUkKEcWRzpyAvyB4PiAtYAPIWpmxWHrs2",
//     "ttl": 1209600,
//     "created": "2018-03-09T10:16:01.967Z",
//     "userId": "5a9fdb292b9cfc08344f91d3"
// }

export class AuthToken {
    id: string;
    ttl: string;
    created: string;
    userId: string;

    constructor(id: string, ttl: string, created: string, userId) {
        this.id = id;
        this.ttl = ttl;
        this.created = created;
        this.userId = userId;
    }
}
