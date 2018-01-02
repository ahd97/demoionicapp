
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

/*
  Generated class for the CityDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityDataProvider {

  url:string="http://localhost:3000/city/";
  constructor(public http: HttpClient) {
    console.log('Hello CityDataProvider Provider');
  }
  getAllCities(){

   return this.http.get(this.url);
  }
addCity(item){
  let body=JSON.stringify(item);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
deleteCity(id){
  return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
updateCity(id,item){
  let body=JSON.stringify(item);
  return this.http.put(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}

}
