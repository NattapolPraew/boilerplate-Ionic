export class CheckupReport {
    id:number
    checkList:Array<{title:string, detail:string}>
    constructor(input){
        this.id = input.id
        this.checkList = input.checkList.map(item => {
            item.icon = 'arrow-dropup';
            return item;
        });
    }
}