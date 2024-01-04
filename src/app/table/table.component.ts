import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Record } from '../models/record.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements  OnInit {
  
  gridColumns:String[] = ['ID','Name','Creation Date', 'Comments'];

  
  @Input()
  title!: string;
  @Input()
  records:Array<Record> = new Array<Record>();
  @Output()
  recordEmitter = new EventEmitter<Record>();
 

  constructor(){
 
  }

  ngOnInit(){
  }

  selectedRecord(record:Record){ 
      this.recordEmitter.emit(record);
  }

}
