import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../models/project.model';
import { Student } from '../../models/student.model';
import { InfoService } from '../../service/info.service';
import { StudentProject } from '../../models/student-project.model';

@Component({
  selector: 'app-projects-students',
  templateUrl: './projects-students.component.html',
  styleUrl: './projects-students.component.css'
})
export class ProjectsStudentsComponent {

  
  private projectSubs$!: Subscription;
  private projectStudentsList$!: Subscription;
  
  projectsLst:Array<Project> = new Array<Project>(); 
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

  selectedProject: number = 1;
  selectedStudent: number = 1;
  studentAddedLst!: Student[];
  availableStudentLst!: Student[];

  constructor(private infoService: InfoService){
    this.selectedProject = 1;

    this.projectSubs$ =  this.infoService.getProjectsLst.subscribe(
      (project: Project[]) => { 
          this.projectsLst = [...project]; 
          this.infoService.loadStudensByProject(this.selectedProject);
      });

    this.projectStudentsList$ = this.infoService.getStudentsByProjectLst.subscribe(
      (list:Student[]) => {
        console.log(list);
        this.studentAddedLst = [...list];
        this.removeAddedStudents([...this.originalStudentList],[...this.studentAddedLst]);
      });

      
      infoService.loadProjects(); 

      this.infoService.loadStudentsAddlst().subscribe(
            (list:Student[]) => {
              this.originalStudentList = [... list];
        }
        );
  }


  
  removeAddedStudents(original:Student[],added:Student[]){
        this.availableStudentLst =  original.filter(item => !added.some(otherItem => item.id === otherItem.id));
    }

  selectionChange(){
      console.log("Selected option >> ",this.selectedProject);
      this.infoService.loadStudensByProject(this.selectedProject);
    }
  
  
  studentSelectedRecord() { 
      const StudentProject: StudentProject = {idProject: this.selectedProject,idStudent:this.selectedStudent};
      console.log(StudentProject);
      this.infoService.saveStudentByProject(StudentProject);
      }

   
}
