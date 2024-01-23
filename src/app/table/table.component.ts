import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements  OnInit, AfterViewInit  {
  
  displayedColumns:String[] = [];
  dataSource = new MatTableDataSource<any>();

  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  @Input()
  title!: string;
 
  
  records:Array<any> = new Array<any>();
  @Input("records")
  set setRecords(_gridData:Array<any>){
        this.dataSource.data = _gridData; 
     }
  
     
  gridColumns: Array<any> = new Array<any>();
  @Input("grid-colums")
  set setColumns(_gridColumns:any[]){
        this.gridColumns = _gridColumns;
        _gridColumns.forEach(colum => {this.displayedColumns.push(colum['column'])});
        //this.displayedColumns.push('selection');
     }
  
  @Output()
  recordEmitter = new EventEmitter<any>();
 

  constructor(){
 
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
  }


  selectedRecord(id:number){ 
      this.recordEmitter.emit(id);
  }


  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}
