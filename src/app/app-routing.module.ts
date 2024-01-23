import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { StudentFormComponent } from "./form/student-form/student-form.component";
import { CourseFormComponent } from "./form/course-form/course-form.component";
import { ProjectFormComponent } from "./form/project-form/project-form.component";
import { PageNotFoundComponent } from "./utils/page-not-found/page-not-found.component";
import { CoursesStudentsComponent } from "./studentRelations/courses-students/courses-students.component";
import { ProjectsStudentsComponent } from "./studentRelations/projects-students/projects-students.component";

const routes: Routes = [
    {path: "", redirectTo: "/students",  pathMatch: "full"},
    {path: 'students',component: StudentFormComponent},
    {path: 'courses',component: CourseFormComponent},
    {path: 'coursesbystudents',component: CoursesStudentsComponent},
    {path: 'projects',component: ProjectFormComponent},
    {path: 'projectsbystudents',component: ProjectsStudentsComponent},
    
    {path: "**", component: PageNotFoundComponent}
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}