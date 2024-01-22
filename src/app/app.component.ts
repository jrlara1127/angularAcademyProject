import { Component, OnDestroy, OnInit } from '@angular/core';   
import { Subscription } from 'rxjs'; 
import { PROJECT_COLUMNS, Project } from './models/project.model';
import { InfoService } from './service/info.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResultMessage } from './models/catalogs/messages';
import { AlertMessageComponent } from './utils/alert-message/alert-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'excersise-one-app';
  private messageSubs$!: Subscription;
   


  constructor(private infoService: InfoService, private _snackBar: MatSnackBar) {
 
    this.messageSubs$ = this.infoService.resultMessage.subscribe(
      (result: ResultMessage) => {
        this.openSnackBar(result);
      }
    );
       
  } 

  ngOnInit() {
    
  }
    
openSnackBar(messageData:ResultMessage) {
  this._snackBar.openFromComponent(AlertMessageComponent, {
    data: messageData,
    duration: 2000,
    horizontalPosition: "end",
    verticalPosition: "top",
  });
}

ngOnDestroy() { 
  this.messageSubs$.unsubscribe();
}

}
