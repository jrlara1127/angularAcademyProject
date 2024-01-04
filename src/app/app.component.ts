import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Record } from './models/record.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  studentButton:Boolean = true;
  coursesButton:Boolean = false;
  projectsButton:Boolean = false;

  studentRecordTmp!:Record;
  courseRecordTmp!:Record;
  projectRecordTmp!:Record;

  studentsRecords:Array<Record> = new Array<Record>();
  coursesRecords:Array<Record> = new Array<Record>();
  projectsRecords:Array<Record> = new Array<Record>();

  title = 'excersise-one-app';


  constructor() {
    
    let records:Array<Record> = new Array<Record>();
      records.push(new Record("One",1,"NA"));
      records.push(new Record("Gabriel",2,"NA2"));
      records.push(new Record("Hellen",3,"NA3"));
      records.push(new Record("Jorge",4,"NA4"));

      this.studentsRecords.push(...records);
      this.coursesRecords.push(...records);
      this.projectsRecords.push(...records);
  }
  selectFn(button:Number){
    this.studentButton = false;
    this.coursesButton = false;
    this.projectsButton = false;
    
    switch(button){
      case 1:
        this.studentButton = true;
        this.studentRecordTmp = new Record();
        break;
      case 2:
        this.coursesButton = true;
        this.courseRecordTmp = new Record();
        break;
      case 3:
        this.projectsButton = true;
        this.projectRecordTmp = new Record();
        break;
    }

  }


 
  receiveStudentRecord(record: Record) { 
    this.studentsRecords.push(record);
    }
  receiveCourseRecord(record: Record) {
    this.coursesRecords.push(record);
    }
  receiveProjectRecord(record: Record) {
    this.projectsRecords.push(record);
    }
  
  studentSelectedRecord(record: Record) { 
    this.studentRecordTmp = record; 
    }
  courseSelectedRecord(record: Record) { 
    this.courseRecordTmp = record; 
    }
  projectSelectedRecord(record: Record) { 
    this.projectRecordTmp = record; 
    }

}
