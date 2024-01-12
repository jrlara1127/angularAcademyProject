export class Record{
    name:String;
    id?:Number;
    comments:String;
    creationDate:Date = new Date();
    enable: Boolean = true;

    constructor(name?:String,id?:Number,comments?:String){
        this.name = name || "";
        this.idElement = id;
        this.comments = comments || "";
    }
    
}