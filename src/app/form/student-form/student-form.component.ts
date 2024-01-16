import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';
import { ScholarYear } from '../../models/catalogs/scholarYear';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  studentTmp!: Student;
  @Output()
  studentEmitter = new EventEmitter<Student>();
  
  @Input("recordSelected")
  set setRecords(_object:Student){
        this.studentTmp = _object; 
        this.form.patchValue(this.studentTmp);

        if (typeof  this.studentTmp?.id !== 'undefined') {
          this.flgUpdate = true;
        }
     }

  title:String = 'Students';

  flgUpdate: Boolean = false;
  
  minDate = new Date(1940, 0, 1);
  maxDate = new Date();
  
  scholarYearCatalog:ScholarYear[] = [
    { code:1,  description:'First grade' },
    { code:2,  description:'Second grade' },
    { code:3,  description:'Third grade' },
    { code:4,  description:'Fourth grade' },
  ]

  INITIAL_VALUES:any = {name : '',
                age : 15,
                email: '',
                scholarYear: 1,
                contactNumber: '',
                birdDate: new Date ()
                };
  
  form = this.fb.group({
    name:['',
        {validators: [Validators.required,Validators.pattern("^[ A-Za-z\-\'\s]+$")],
          updateOn:'blur'}
        ], 
    age: [15 , 
      {validators: [Validators.required,
                    Validators.pattern("^[0-9]+$"),
                    Validators.min(15),Validators.max(100)],
      updateOn:'blur'}
      ],
    email: ["", {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'}],
    scholarYear: [1, Validators.required],
    contactNumber:['',
        {validators: [Validators.required,Validators.pattern("^[0-9]+$")],
          updateOn:'blur'}
        ], 
    birdDate: [new Date(), Validators.required]

});

constructor(private fb: FormBuilder){
  this.flgUpdate = false;
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
  this.form.reset(this.INITIAL_VALUES);
  this.form.markAsPristine();
  this.form.markAsTouched();
  this.flgUpdate =false;
  this.studentTmp = {} as Student;

}

Update() {
  let student:Student = this.form.value as Student;
    this.studentTmp.name = student.name;
    this.studentTmp.age = student.age;
    this.studentTmp.email = student.email;
    this.studentTmp.scholarYear = student.scholarYear;
    this.studentTmp.contactNumber = student.contactNumber;
    //this.studentTmp.birthDate = student.birthDate;
  this.studentEmitter.emit({...this.studentTmp});
  this.flgUpdate =false;
  this.reset();
  }


submitForm() {
  let student:Student = this.form.value as Student;
  student.creationDate = new Date();
  this.studentEmitter.emit({...student});
  this.reset();
}


}
