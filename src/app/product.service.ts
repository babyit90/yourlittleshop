import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Product {
  name: string;
}


@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:5000/products/list');

  }
  myData() {
    return 'This is my data, man!';
  }


}
