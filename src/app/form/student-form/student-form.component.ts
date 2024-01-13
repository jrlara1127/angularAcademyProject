import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';
import { ScholarYear } from '../../models/catalogs/scholarYear';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  title:String = 'Students';

  studentTmp!:Student;

  
  minDate = new Date(1940, 0, 1);
  maxDate = new Date();
  
  scholarYearCatalog:ScholarYear[] = [
    { code:1,  description:'First grade' },
    { code:2,  description:'Second grade' },
    { code:3,  description:'Third grade' },
  ]

  form = this.fb.group({
    id: [null  , 
        {validators: [Validators.required,
                      Validators.pattern("^[0-9]+$"),
                      Validators.min(0)],
        updateOn:'blur'}
        ],
    name:['',
        {validators: [Validators.required,Validators.pattern("^[ A-Za-z\-\'\s]+$")],
          updateOn:'blur'}
        ], 
    age: [null  , 
      {validators: [Validators.required,
                    Validators.pattern("^[0-9]+$"),
                    Validators.min(1),Validators.max(100)],
      updateOn:'blur'}
      ],
    email: ["", {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'}],
    scholarYear: ['BEGINNER', Validators.required],
    contactNumber:['',
        {validators: [Validators.required,Validators.pattern("^[0-9]+$")],
          updateOn:'blur'}
        ], 
    birdDate: [new Date(), Validators.required],

});

constructor(private fb: FormBuilder){
  console.log(this.form);
}

get id() {
  return this.form.controls['id'];
}

get name() {
  return this.form.controls['name'];
}

get age() {
  return this.form.controls['age'];
}

get email() {
  return this.form.controls['email'];
}

get contactNumber() {
  return this.form.controls['contactNumber'];
}

reset() {
  this.form.reset();
  
  console.log(this.form.value);

}


submitForm() {
  console.log(this.form.value);
}


}
