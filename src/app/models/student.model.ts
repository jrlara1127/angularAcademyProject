export class Student{
    id?:Number;
    name:String;
    age?:Number;
    email?:String;
    scholarYear?:number;
    contactNumber?:Number
    birdDate?:Date;
    creationDate:Date = new Date();

    comments?:String;

    constructor(name?:String,id?:Number,comments?:String){
        this.name = name || "";
        this.id = id;
        this.comments = comments || "";
    }
    
}