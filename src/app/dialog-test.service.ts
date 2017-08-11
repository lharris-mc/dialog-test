import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DialogTestService {

  constructor(private _http:Http) { }

  fnGetData(d:string){
    return Observable.forkJoin(this._http.get('./assets/'+ d +'/blah01.json').map(res => res.json()),this._http.get('./assets/'+ d +'/blah02.json').map(res => res.json()));
  }
}
