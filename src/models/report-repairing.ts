import {ItemList} from "./report"

export class RepairReport extends ItemList{
    id:number
    constructor(id:number,title?:string,detail?: string){
        super(title, detail);
        this.id = id;
    }
}