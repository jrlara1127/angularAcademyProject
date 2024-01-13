import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Record } from '../models/record.model';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements  OnInit {
  
  displayedColumns:String[] = [];
  dataSource = new MatTableDataSource<Record>();

  

  @Input()
  title!: string;
 
  
  records:Array<Record> = new Array<Record>();
  @Input("records")
  set setRecords(_gridData:Array<Record>){
        this.dataSource.data = _gridData; 
     }
  
     
  gridColumns: Array<any> = new Array<any>();
  @Input("grid-colums")
  set setColumns(_gridColumns:any[]){
        this.gridColumns = _gridColumns;
        _gridColumns.forEach(colum => {this.displayedColumns.push(colum['column'])});
        this.displayedColumns.push('selection');
     }
  
  @Output()
  recordEmitter = new EventEmitter<Record>();
 

  constructor(){
 
  }

  ngOnInit(){
  }


  selectedRecord(record:Record){ 
      this.recordEmitter.emit({...record});
  }



  

}
