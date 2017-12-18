export class Mech {
    id: number;
    siteID: number;
    nextScheduleDate: Date;

    constructor(id:number){
        let date = new Date()
        this.siteID = Math.ceil(Math.random()*3);
        this.id = id;
        this.nextScheduleDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), Math.ceil(Math.random()*31)));
    }
}