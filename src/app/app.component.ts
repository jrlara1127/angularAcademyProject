import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Record } from './models/record.model';
import { Subject } from 'rxjs';
import { STUDENTS, STUDENT_COLUMNS, Student } from './models/student.model';
import { COURSES, COURSE_COLUMNS, Courses } from './models/courses.model';
import { PROJECTS, PROJECT_COLUMNS, Project } from './models/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  studentButton:Boolean = true;
  coursesButton:Boolean = false;
  projectsButton:Boolean = false;

  studentRecordTmp!:Student;
  courseRecordTmp!:Courses;
  projectRecordTmp!:Project;

  studentsRecords:Array<Student> = STUDENTS;
  coursesRecords:Array<Courses> = COURSES;
  projectsRecords:Array<Project> = PROJECTS;


  studentColumns:any[] = STUDENT_COLUMNS;

  courseColumns: any[] = COURSE_COLUMNS;

    projectColumns: any[] = PROJECT_COLUMNS;

  title = 'excersise-one-app';


  constructor() {
      //this.coursesRecords.push(...records as COR);
      //this.projectsRecords.push(...records);
  }
  selectFn(button:Number){
    this.studentButton = false;
    this.coursesButton = false;
    this.projectsButton = false;
    
    switch(button){
      case 1:
        this.studentButton = true;
        this.studentRecordTmp = {} as Student;
        break;
      case 2:
        this.coursesButton = true; 
        this.courseRecordTmp = new Courses();
        break;
      case 3:
        this.projectsButton = true;
        this.projectRecordTmp = new Project();
        break;
    }

  }


 
  receiveStudentRecord(record: Student) { 
    console.log('sdsdsd',record);
    console.log('sdsdsd',record.id);
    if (record.id){
      const index =  this.studentsRecords.findIndex((student) => {
           return student.id === record.id;
        });
      
      this.studentsRecords[index] = record;

    } else{
      console.log('sdsdsd2',record); 
      const maxIdStudent:Student = this.studentsRecords.reduce((maxStudent,currentStudent)=>{
                                    return currentStudent.id && maxStudent.id && currentStudent.id > maxStudent.id ? currentStudent: maxStudent
                                },this.studentsRecords[0]); 
      record.id = (maxIdStudent.id || 0)+1;
      this.studentsRecords.push(record);
    }

    
    this.studentsRecords = [...this.studentsRecords];

    }
  receiveCourseRecord(record: Courses) {
    this.coursesRecords.push(record);
    }
  receiveProjectRecord(record: Project) {
    this.projectsRecords.push(record);
    }
  
  studentSelectedRecord(record: any) { 
    this.studentRecordTmp = {...record as Student}; 
    console.log('StudentSelected',this.studentRecordTmp);
    }
  courseSelectedRecord(record: Courses) { 
    this.courseRecordTmp = {...record}; 
    }
  projectSelectedRecord(record: Project) { 
    this.projectRecordTmp = {...record}; 
    }

}
