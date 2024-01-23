import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../service/info.service';
import { Courses } from '../../models/courses.model';
import { Subscription } from 'rxjs';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-courses-students',
  templateUrl: './courses-students.component.html',
  styleUrl: './courses-students.component.css'
})
export class CoursesStudentsComponent  {

  
  private coursesSubs$!: Subscription;
  coursesLst:Array<Courses> = new Array<Courses>(); 
  originalStudentList:Array<Student> = new Array<Student>();

  selectedOption: any[] = [1];
  studentAddedLst!: Student[];
  availableStudentLst!: Student[];

  constructor(private infoService:InfoService){
    this.coursesSubs$ =  this.infoService.getCoursesLst.subscribe(
      (courses: Courses[]) => { this.coursesLst = [...courses]; 
      });

    infoService.loadCourses();
    
    this.selectedOption = [1];
    this.selectionChange();

    this.infoService.loadStudentsAddlst().subscribe(
      (list:Student[]) => {
        this.originalStudentList = [... list];
      }
    );
  
  }
   
selectionChange() {
    console.log(this.selectedOption[0]);
    this.infoService.loadStudensByCourse(this.selectedOption[0]).subscribe(
        (list:any) => {
          console.log(list['payload']);
          this.studentAddedLst = [...list['payload'] as Student[]];
          this.removeAddedStudents([...this.originalStudentList],[...this.studentAddedLst]);
        }
      );
  }

  removeAddedStudents(original:Student[],added:Student[]){
      this.availableStudentLst =  original.filter(item => !added.some(otherItem => item.id === otherItem.id));
  }

  

}
