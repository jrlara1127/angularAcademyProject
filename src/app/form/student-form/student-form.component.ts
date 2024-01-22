import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { STUDENT_COLUMNS, Student } from '../../models/student.model';
import { SCHOOL_YEAR_CATALOG, ScholarYear } from '../../models/catalogs/scholarYear';
import { Subscription } from 'rxjs';
import { InfoService } from '../../service/info.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertMessageComponent } from '../../utils/alert-message/alert-message.component';
import { ResultMessage } from '../../models/catalogs/messages';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnDestroy {

  private studentsSubs$!: Subscription;
  private studentSubs$!: Subscription;

  studentsRecords!:Array<Student>; 
  studentTmp!:Student;

  title:string = 'Students'; 
  
  studentColumns:any[] = STUDENT_COLUMNS;

  flgUpdate: Boolean = false;
  
  minDate = new Date(1940, 0, 1);
  maxDate = new Date();
  
  scholarYearCatalog:ScholarYear[] = SCHOOL_YEAR_CATALOG;

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

constructor(private fb: FormBuilder, private infoService: InfoService){
    this.flgUpdate = false;

    this.studentsSubs$ =  this.infoService.getStudentsLst.subscribe(
      (students: Student[]) => { this.studentsRecords = [...students]; });
    this.studentSubs$ = this.infoService.getStudent.subscribe(
      (student: Student) => {
        this.studentTmp = {...student};
        //Updating Form
        this.form.patchValue(this.studentTmp);
        if (typeof  this.studentTmp?.id !== 'undefined') {
          this.flgUpdate = true;
        }
      }
    );


    this.infoService.loadStudents();
  }



ngOnDestroy() {
  this.studentsSubs$.unsubscribe();
  this.studentSubs$.unsubscribe();
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
    //this.studentEmitter.emit({...this.studentTmp});
    this.infoService.updateStudent(this.studentTmp);
    this.flgUpdate =false;
    this.reset();
  }

submitForm() {
  let student:Student = this.form.value as Student;
  student.creationDate = new Date();
  
  this.infoService.saveStudent(student);
  this.reset();
}

  
studentSelectedRecord(id: number) { 
  this.infoService.loadStudentById(id);
  }


}
