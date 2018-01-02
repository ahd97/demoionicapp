import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the ColorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ColorProvider {
  url:string="http://localhost:3000/color/";
  constructor(public http: HttpClient) {
    console.log('Hello ColorProvider Provider');
  }
  getAllColor(){

    return this.http.get(this.url);
   }

}
