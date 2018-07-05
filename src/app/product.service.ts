import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { url } from './constant';
export interface Product {
  name: string;
}


@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(url+'products/list');

  }
  myData() {
    return 'This is my data, man!';
  }


}
