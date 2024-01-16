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

 
  receiveStudentRecord(record: Student) { 
        //update
        if (record.id){
          const index =  this.studentsRecords.findIndex((student) => {
              return student.id === record.id;
            });
          
          this.studentsRecords[index] = record;

        } else{ //save
          const maxIdStudent:Student = this.studentsRecords.reduce((maxStudent,currentStudent)=>{
                                        return currentStudent.id && maxStudent.id && currentStudent.id > maxStudent.id ? currentStudent: maxStudent
                                    },this.studentsRecords[0]); 
          record.id = (maxIdStudent.id || 0)+1;
          this.studentsRecords.push(record);
        }
        this.studentsRecords = [...this.studentsRecords];
    }


  receiveCourseRecord(record: Courses) {
    //update
    if (record.id){
      const index =  this.coursesRecords.findIndex((student) => {
          return student.id === record.id;
        });
      
      this.coursesRecords[index] = record;

    } else{  //save
      const maxId:Courses = this.coursesRecords.reduce((max,current)=>{
                                    return current.id && max.id && current.id > max.id ? current: max
                                },this.coursesRecords[0]); 
      record.id = (maxId.id || 0)+1;
      this.coursesRecords.push(record);
    }
    this.coursesRecords = [...this.coursesRecords];
    }
  receiveProjectRecord(record: Project) {
    this.projectsRecords.push(record);
    }
  
  studentSelectedRecord(record: Student) { 
    this.studentRecordTmp = {...record as Student}; 
    }
  courseSelectedRecord(record: Courses) { 
    this.courseRecordTmp = {...record as Courses}; 
    console.log('RecordSelected',this.studentRecordTmp);
    }
  projectSelectedRecord(record: Project) { 
    this.projectRecordTmp = {...record}; 
    }

}
