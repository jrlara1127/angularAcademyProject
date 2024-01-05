import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../models/record.model';

@Injectable()
export class InfoService {

  constructor(private http:HttpClient) { 

  }

  loadRecords(recordType:String):Observable<Record[]>{   
    return this.http.get<any>('http://localhost:3000/'+recordType);
  }
}
