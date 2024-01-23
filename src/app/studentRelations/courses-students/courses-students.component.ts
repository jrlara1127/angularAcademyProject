import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../service/info.service';
import { Courses } from '../../models/courses.model';
import { Subscription } from 'rxjs';
import { Student } from '../../models/student.model';
import { StudentCourse } from '../../models/student-course.model';

@Component({
  selector: 'app-courses-students',
  templateUrl: './courses-students.component.html',
  styleUrl: './courses-students.component.css'
})
export class CoursesStudentsComponent  {

  
  private coursesSubs$!: Subscription;
  private courseStudentsList$!: Subscription;
  coursesLst:Array<Courses> = new Array<Courses>(); 
  originalStudentList:Array<Student> = new Array<Student>();


  
  studentAddedColumns:any[] = [
    { name:'ID', column:'id' }, 
    { name:'Name',column:'name' },
    { name:'Email', column:'email'}
  ];

  avilableStudentsColumns:any[] = [
    { name:'ID', column:'id' }, 
    { name:'Name',column:'name' },
    { name:'Email', column:'email'},
    { name:' ', column:'add', type:'add' }
  ];

  selectedCourse: number = 1;
  selectedStudent: number = 1;
  studentAddedLst!: Student[];
  availableStudentLst!: Student[];

  constructor(private infoService:InfoService){
    
    this.selectedCourse = 1;

    this.coursesSubs$ =  this.infoService.getCoursesLst.subscribe(
      (courses: Courses[]) => { 
          this.coursesLst = [...courses]; 
          this.infoService.loadStudensByCourse(this.selectedCourse);
      });

    this.courseStudentsList$ = this.infoService.getStudentsByCourseLst.subscribe(
      (list:Student[]) => {
        console.log(list);
        this.studentAddedLst = [...list];
        this.removeAddedStudents([...this.originalStudentList],[...this.studentAddedLst]);
      });
      infoService.loadCourses(); 

      this.infoService.loadStudentsAddlst().subscribe(
            (list:Student[]) => {
              this.originalStudentList = [... list];
        }
        );
  
  }

  selectionChange(){
    console.log("Selected option >> ",this.selectedCourse);
    this.infoService.loadStudensByCourse(this.selectedCourse);
  }
   

  removeAddedStudents(original:Student[],added:Student[]){
      this.availableStudentLst =  original.filter(item => !added.some(otherItem => item.id === otherItem.id));
  }


  studentSelectedRecord() { 
    const studentCourse: StudentCourse = {idCourse: this.selectedCourse,idStudent:this.selectedStudent};
    console.log(studentCourse);
    this.infoService.saveStudentByCourse(studentCourse);
    }
   

}
