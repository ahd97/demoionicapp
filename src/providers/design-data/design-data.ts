import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the DesignDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DesignDataProvider {
  url:string="http://localhost:3000/design/";
  constructor(public http: HttpClient) {
    console.log('Hello DesignDataProvider Provider');
  }
  getAllDesign(){

    return this.http.get(this.url);
   }
}
