import { Component, OnInit, Inject } from '@angular/core';
import { DialogTestService } from '../dialog-test.service';
import { MD_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css'],
  providers: [ DialogTestService ]
})
export class AppDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public _data:any, private _service:DialogTestService) { }
  data:any;
  ngOnInit() {
        this._service.fnGetData(this._data).subscribe(res =>{
      this.data = res;
    })
  }

}
