import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, catchError, map, of } from 'rxjs'; 
import { Student } from '../models/student.model';
import { Courses } from '../models/courses.model';
import { Project } from '../models/project.model';
import { response } from 'express';
import { ResultMessage } from '../models/catalogs/messages';

@Injectable()
export class InfoService {

  server: string = "http://localhost:9000/api";
 
  getStudentsLst: Subject<Student[]> = new Subject<Student[]>();
  getStudent: Subject<Student> = new Subject<Student>();

  getCoursesLst: Subject<Courses[]> = new Subject<Courses[]>();
  getCourse: Subject<Courses>  = new Subject<Courses>();

  getProjectsLst: Subject<Project[]> = new Subject<Project[]>();
  getProject: Subject<Project> = new Subject<Project>();

  resultMessage:Subject<ResultMessage> = new Subject<ResultMessage>;

  constructor(private http:HttpClient) { 

  }


  /***********************************************************************************
   *                        STUDENT SERVICES
   **********************************************************************************/
  loadStudents(){   
    this.http.get<any>(this.server+"/students").pipe(map(res=> res['payload'])).
                subscribe(
                  (students) => {
                    this.getStudentsLst.next([...students as Student[]]);
                  }
                );
  }
  
  loadStudentById(id:number){
    this.http.get<any>(this.server+"/students/"+id)
              .subscribe(
                (student:Student) => {
                  this.getStudent.next({...student});
                }
              );
  }

  saveStudent(student: Student){
    this.http.post(this.server+"/students",student).subscribe(
      (response) => {
        console.log("Response>>: ",response);
        this.resultMessage.next(response as ResultMessage);
        this.loadStudents();
      },  error => {  console.log(error);}
    );
  }

  updateStudent(student: Student){
    this.http.put(this.server+"/students",student).subscribe(
      response => {
        console.log("Response>>: ",response);
        this.resultMessage.next(response as ResultMessage);
        this.loadStudents();
      },  error => {  console.log(error);}
    );   
  }

  
  
  /***********************************************************************************
   *                        COURSES SERVICES
   **********************************************************************************/

  loadCourses(){   
    this.http.get<any>(this.server+"/courses").pipe(map(res=> res['payload'])).
                  subscribe(
                    (courses) => {
                      this.getCoursesLst.next([...courses as Courses[]]);
                    }
                  );
    }
  
    loadCourseById(id:number){
      this.http.get<any>(this.server+"/courses/"+id)
                .subscribe(
                  (course:Courses) => {
                    this.getCourse.next({...course});
                  }
                );
    }
  
    saveCourse(course: Courses){
      this.http.post(this.server+"/courses",course).subscribe(
        response => {
          console.log("Response>>: ",response);
          this.resultMessage.next(response as ResultMessage);
          this.loadCourses();
        },  error => {  console.log(error);}
      );
    }
  
    updateCourse(course: Courses){
      this.http.put(this.server+"/courses",course).subscribe(
        response => {
          console.log("Response>>: ",response);
          this.resultMessage.next(response as ResultMessage);
          this.loadCourses();
        },  error => {  console.log(error);}
      );   
    }

  
  
  /***********************************************************************************
   *                        PROJECTS SERVICES
   **********************************************************************************/
  
  loadProjects(){   
    this.http.get<any>(this.server+"/projects").pipe(map(res=> res['payload'])).
            subscribe(
              (projects) => {
                this.getProjectsLst.next([...projects as Project[]]);
              }
            );
  }
  
  loadProjectById(id:number){
    this.http.get<any>(this.server+"/projects/"+id)
              .subscribe(
                (project:Project) => {
                  this.getProject.next({...project});
                }
              );
  }

  saveProject(project: Project){
    this.http.post(this.server+"/projects",project).subscribe(
      response => {
        console.log("Response>>: ",response);
        this.resultMessage.next(response as ResultMessage);
        this.loadProjects();
      },  error => {  console.log(error);}
    );
  }

  updateProject(project: Project){
    this.http.put(this.server+"/projects",project).subscribe(
      response => {
        console.log("Response>>: ",response);
        this.resultMessage.next(response as ResultMessage);
        this.loadProjects();
      },  error => {  console.log(error);}
    );   
  }
 


}
