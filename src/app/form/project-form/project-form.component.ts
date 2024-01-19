import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project.model';
import { FormBuilder, Validators } from '@angular/forms';
import { createPromoRangeValidator } from '../../validators/date-range.validator';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {

  title:String = 'Project';
  flgUpdate: Boolean = false;
  projectTmp!: Project;

  @Output()
  projectEmitter = new EventEmitter<Project>();
 
  @Input("recordSelected")
  set setRecords(_object:Project){
        this.projectTmp = _object; 
        if (typeof  this.projectTmp !== 'undefined') {
          this.form.controls['name'].setValue(this.projectTmp.name);
          this.form.controls['description'].setValue(this.projectTmp.description);
          this.form.controls['numStudents'].setValue(this.projectTmp.numStudents);
          this.form.controls['instructor'].setValue(this.projectTmp.instructor);

          this.flgUpdate = true;
        }
     }

     INITIAL_VALUES:any = {
      name : '', 
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      numStudents: null
     };
    
  form = this.fb.group({
      name:['',  {validators: [Validators.required,Validators.pattern("^[ A-Za-z\-\'\s]+$")],
            updateOn:'blur'}
          ], 
      description:['',
          {validators: [Validators.required,Validators.minLength(30),Validators.maxLength(300)],
            updateOn:'blur'}
          ],
      instructor:['',   {validators: [Validators.required,Validators.pattern("^[ A-Za-z\-\'\s]+$"),
                        Validators.maxLength(100)],
                  updateOn:'blur'}
                ], 
      startDate: [null],
      endDate: [null],
      numStudents: [Number.NaN , {validators: [Validators.required,
                      Validators.pattern("^[0-9]+$"),
                      Validators.min(1),Validators.max(40)],
                    updateOn:'blur'}
                    ]
                  }, {
                      validators: [createPromoRangeValidator()]
                  });

  
  get name() {
    return this.form.controls['name'];
  }
  get description() {
    return this.form.controls['description'];
  }
  get instructor() {
    return this.form.controls['instructor'];
  }
  get startDate() {
    return this.form.controls['startDate'];
  }
  get endDate() {
    return this.form.controls['endDate'];
  }
  get numStudents() {
    return this.form.controls['numStudents'];
  }

  
  constructor(private fb: FormBuilder){

  } 


  reset() {
    this.form.reset(this.INITIAL_VALUES);
    this.form.markAsPristine();
    this.form.markAsTouched();
    this.flgUpdate =false;
    this.projectTmp = {} as Project;
  
  }
  
  Update() {
    let project:Project = this.form.value as Project;
      this.projectTmp.name = project.name;
      this.projectTmp.description = project.description;
      //this.projectTmp.startDate = project.startDate;
      //this.projectTmp.endDate = project.endDate;
      this.projectTmp.numStudents = project.numStudents;
    this.projectEmitter.emit({...this.projectTmp});
    this.flgUpdate =false;
    this.reset();
    }
  
  
  submitForm() {
    let project:Project = this.form.value as Project;
    this.projectEmitter.emit({...project});
    this.reset();
  }



}
