import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StudentFormComponent } from './form/student-form/student-form.component';
import { CourseFormComponent } from './form/course-form/course-form.component';
import { ProjectFormComponent } from './form/project-form/project-form.component';
import { InfoService } from './service/info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        RouterOutlet, 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule
     ],
     declarations: [
       AppComponent, 
       RegisterComponent, 
       TableComponent,
        StudentFormComponent,
        CourseFormComponent,
        ProjectFormComponent
    ],
     providers: [InfoService],
     exports: [AppComponent],
     bootstrap: [AppComponent]
})
export class AppModule {

 }