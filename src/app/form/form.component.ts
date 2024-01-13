import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Record } from '../models/record.model';
import { FormBuilder, Validators } from '@angular/forms';

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

    form = this.fb.group({
      id: [null  , 
          {validators: [Validators.required,
                        Validators.pattern("[0-9]"),
                        Validators.min(0)],
          updateOn:'blur'}
          ],
      name:['',
          {validators: [Validators.required,Validators.pattern("^[a-zA-Z\s]+$")],
            updateOn:'blur'}
          ],
      comments:['',
          {validators: [Validators.required,Validators.maxLength(30)],
            updateOn:'blur'}
          ]
  });

  constructor(private fb: FormBuilder){
      console.log(this.form);
  }



  ngOnChanges(changes: SimpleChanges){
    if(changes['recordSelected']){
      if(typeof this.recordSelected != 'undefined'){
        this.recordTmp = this.recordSelected;
      }
    }

  }

  
PosttoServer() {
  this.recordEmitter.emit({...this.recordTmp});
  this.recordTmp = new Record();
}

get id() {
  return this.form.controls['id'];
}

get name() {
  return this.form.controls['name'];
}

get comments() {
  return this.form.controls['comments'];
}


reset() {
  this.form.reset();

  console.log(this.form.value);

}

}
