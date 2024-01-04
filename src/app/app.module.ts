import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
      
    imports: [
        BrowserModule,
        RouterOutlet, 
        CommonModule,
        FormsModule
     ],
     declarations: [
       AppComponent, RegisterComponent, TableComponent],
     providers: [],
     exports: [AppComponent],
     bootstrap: [AppComponent]
})
export class AppModule {

 }