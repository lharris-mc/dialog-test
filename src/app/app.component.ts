import { Component, OnInit } from '@angular/core';
import { MdMenuTrigger, MdDialog, MdDialogRef } from '@angular/material';

import { AppDialogComponent } from './app-dialog/app-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any= '';
  constructor(private _dialog:MdDialog){ };
  ngOnInit(){

  }
  openDialog(){
    let dialogRef:MdDialogRef<AppDialogComponent> = this._dialog.open( AppDialogComponent,{data: 'fakeData'} );
  }
}
