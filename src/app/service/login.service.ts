import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../constant';
@Injectable()
export class LoginService {

  constructor( private http: HttpClient) { }

  registration(data){
       this.http.post(`${url}registration`, {data}).subscribe(res=>
      console.log('dsads'));
  }
}
