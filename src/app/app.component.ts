import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Record } from './models/record.model';
import { Subject } from 'rxjs';
import { InfoService } from './service/info.service';

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


  constructor(private infoService: InfoService){


  }

  
  ngOnInit(){
    this.loadStudentRecords();
  }

  loadStudentRecords(){
    this.infoService.loadRecords('students').subscribe(records => {
      console.log('loadStudentRecords',records);
      this.studentsRecords = records;
    });
  }

  loadCoursesRecords(){
    this.infoService.loadRecords('courses').subscribe(records => {
      console.log('loadCoursesRecords',records);
      this.coursesRecords = records;
    });
  }

  
  loadProjectsRecords(){
    this.infoService.loadRecords('projects').subscribe(records => {
      console.log('loadProjectsRecords',records);
      this.projectsRecords = records;
    });
  }

  selectFn(button:Number){
    this.studentButton = false;
    this.coursesButton = false;
    this.projectsButton = false;
    
    switch(button){
      case 1:
        this.studentButton = true;
        this.studentRecordTmp = new Record();
        this.loadStudentRecords();
        break;
      case 2:
        this.coursesButton = true;
        this.courseRecordTmp = new Record();
        this.loadCoursesRecords();
        break;
      case 3:
        this.projectsButton = true;
        this.projectRecordTmp = new Record();
        this.loadProjectsRecords();
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
