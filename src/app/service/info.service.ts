import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Record } from '../models/record.model';
import { Student } from '../models/student.model';
import { Courses } from '../models/courses.model';
import { Project } from '../models/project.model';

@Injectable()
export class InfoService {

  server: string = "http://localhost:9000/api";

  constructor(private http:HttpClient) { 

  }

  loadStudent():Observable<Student[]>{   
    return this.http.get<any>(this.server+"/students").pipe(map(res=> res['payload']));
  }

  loadCourses():Observable<Courses[]>{   
    return this.http.get<any>(this.server+"/courses").pipe(map(res=> res['payload']));
  }
  
  loadProjects():Observable<Project[]>{   
    return this.http.get<any>(this.server+"/projects").pipe(map(res=> res['payload']));
  }

  /*
  saveRecord(recordType:String, record:Record):Observable<Boolean>{
    
    let recorddto:any = {};
    
    recorddto.id = record.id;
    recorddto.name = record.name;
    recorddto.comments = record.comments;
    recorddto.creationDate = record.creationDate;
    recorddto.enable = record.enable;
    return this.http.post<any>('http://localhost:3000/'+recordType, recorddto)
                .pipe(
                  map(res => {
                  console.log(res);
                  return true;
                }),
                catchError(error => {
                  console.log('Error during post request', error);
                  return of(false);
                })
                );
  }
  */


}
