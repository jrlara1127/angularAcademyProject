export class Student{
    id?:Number;
    name:String;
    lastName?:String;
    age?:Number;
    email?:String;
    contactNumber?:Number
    birdDate?:Date;
    creationDate:Date = new Date();
    enable: Boolean = true;

    comments?:String;

    constructor(name?:String,id?:Number,comments?:String){
        this.name = name || "";
        this.id = id;
        this.comments = comments || "";
    }
    
}