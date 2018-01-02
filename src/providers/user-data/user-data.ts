import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  url:string="http://localhost:3000/users/";
  constructor(public http: HttpClient) {
    console.log('Hello UserDataProvider Provider');
  }
getAllUser(){
 return this.http.get(this.url);
}
}
