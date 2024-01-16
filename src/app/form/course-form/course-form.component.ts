import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../models/courses.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  
  title:String = 'Course';

  courseTmp!:Courses;
  flgUpdate:boolean = false;

  @Output()
  courseEmitter = new EventEmitter<Courses>();

  @Input("recordSelected")
  set setRecords(_object:Courses){
        this.courseTmp = _object; 
        if (typeof  this.courseTmp !== 'undefined') {
          this.form.controls.name.setValue(this.courseTmp.name);
          this.form.controls.instructor.setValue(this.courseTmp.instructor);
          this.form.controls.hours.setValue(this.courseTmp.hours);
          this.form.controls.creditHours.setValue(this.courseTmp.creditHours);
          this.form.controls.numStudents.setValue(this.courseTmp.numStudents); 
          this.flgUpdate = true;
        }
     }

  INITIAL_VALUES:any = {
      name : '', 
      instructor: '',
      hours: null,
      creditHours: null,
      numStudents: null
     };
    
  form = this.fb.group({
      name:['',  {validators: [Validators.required,Validators.pattern("^[ A-Za-z\-\'\s]+$")],
            updateOn:'blur'}
          ], 
      instructor:['',   {validators: [Validators.required,Validators.pattern("^[ A-Za-z\-\'\s]+$"),
                        Validators.maxLength(100)],
                  updateOn:'blur'}
                ], 
      hours: [Number.NaN ,   {validators: [Validators.required,
                      Validators.pattern("^[0-9]+$"),
                      Validators.min(1),Validators.max(80)],
              updateOn:'blur'}
              ],
      creditHours: [ 0.0,   {validators: [Validators.required,
                        Validators.min(1),Validators.max(15)],
                    updateOn:'blur'}
                    ],
      numStudents: [Number.NaN , {validators: [Validators.required,
                      Validators.pattern("^[0-9]+$"),
                      Validators.min(1),Validators.max(40)],
                    updateOn:'blur'}
                    ]
  
  });

  constructor(private fb: FormBuilder){

  }

  get name() {
    return this.form.controls['name'];
  } 
  get instructor() {
    return this.form.controls['instructor'];
  } 
  get hours() {
    return this.form.controls['hours'];
  } 
  get creditHours() {
    return this.form.controls['creditHours'];
  } 
  get numStudents() {
    return this.form.controls['numStudents'];
  } 


  reset() {
    this.form.reset(this.INITIAL_VALUES);
    this.form.markAsPristine();
    this.form.markAsTouched();
    this.flgUpdate =false;
    this.courseTmp = {} as Courses;
  
  }
  
  Update() {
    let course:Courses = this.form.value as Courses;
      this.courseTmp.name = course.name;
      this.courseTmp.instructor = course.instructor;
      this.courseTmp.hours = course.hours;
      this.courseTmp.creditHours = course.creditHours;
      this.courseTmp.numStudents = course.numStudents;
    this.courseEmitter.emit({...this.courseTmp});
    this.flgUpdate =false;
    this.reset();
    }
  
  
  submitForm() {
    let course:Courses = this.form.value as Courses;
    this.courseEmitter.emit({...course});
    this.reset();
  }

}
