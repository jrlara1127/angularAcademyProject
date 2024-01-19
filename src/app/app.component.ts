import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Record } from './models/record.model';
import { Subject } from 'rxjs';
import { STUDENT_COLUMNS, Student } from './models/student.model';
import {  COURSE_COLUMNS, Courses } from './models/courses.model';
import { PROJECT_COLUMNS, Project } from './models/project.model';
import { InfoService } from './service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  studentButton:Boolean = true;
  coursesButton:Boolean = false;
  projectsButton:Boolean = false;

  studentRecordTmp!:Student;
  courseRecordTmp!:Courses;
  projectRecordTmp!:Project;

  studentsRecords!:Array<Student>; 
  coursesRecords!:Array<Courses> ;
  projectsRecords!:Array<Project>;


  studentColumns:any[] = STUDENT_COLUMNS;

  courseColumns: any[] = COURSE_COLUMNS;

    projectColumns: any[] = PROJECT_COLUMNS;

  title = 'excersise-one-app';


  constructor(private infoService: InfoService) {

      this.infoService.loadStudent().subscribe(
        students => {this.studentsRecords = students as Array<Student>;}
      );
      
      this.infoService.loadCourses().subscribe(
        courses => {this.coursesRecords = courses as Array<Courses>;}
      );
      
      this.infoService.loadProjects().subscribe(
        project => {this.projectsRecords = project as Array<Project>;}
      );
  } 

  ngOnInit() {
    
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
      const index =  this.coursesRecords.findIndex((course) => {
          return course.id === record.id;
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
    //update
    if (record.id){
      const index =  this.projectsRecords.findIndex((project) => {
          return project.id === record.id;
        });
      
      this.projectsRecords[index] = record;

    } else{  //save
      const maxId:Project = this.projectsRecords.reduce((max,current)=>{
                                    return current.id && max.id && current.id > max.id ? current: max
                                },this.projectsRecords[0]); 
      record.id = (maxId.id || 0)+1;
      this.projectsRecords.push(record);
    }
    this.projectsRecords = [...this.projectsRecords];
    }
  
  studentSelectedRecord(record: Student) { 
    this.studentRecordTmp = {...record as Student}; 
    }
  courseSelectedRecord(record: Courses) { 
    this.courseRecordTmp = {...record as Courses}; 
    console.log('RecordSelected',this.studentRecordTmp);
    }
  projectSelectedRecord(record: Project) { 
    this.projectRecordTmp = {...record as Project}; 
    console.log('ProjectSelected',this.projectRecordTmp);
    }

}
