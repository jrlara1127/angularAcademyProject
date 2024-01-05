import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Record } from '../models/record.model';

@Injectable()
export class InfoService {

  constructor(private http:HttpClient) { 

  }

  loadRecords(recordType:String):Observable<Record[]>{   
    return this.http.get<any>('http://localhost:3000/'+recordType);
  }


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
}
