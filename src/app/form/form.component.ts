import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Record } from '../models/record.model';

@Component({
  selector: 'register-component',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class RegisterComponent  implements OnChanges{


  recordTmp:Record = new Record();
  
  @Input()
  title!: string;

  @Input()
  recordSelected!:Record;

  @Output()
  recordEmitter = new EventEmitter<Record>();

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges){
    if(changes['recordSelected']){
      if(typeof this.recordSelected != 'undefined'){
        this.recordTmp = this.recordSelected;
      }
    }

  }

  
PosttoServer() {
  console.log(this.recordTmp);
  this.recordEmitter.emit(this.recordTmp);
  this.recordTmp = new Record();
}

}
