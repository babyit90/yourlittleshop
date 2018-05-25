import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private productObj: ProductService){}
  

  ngOnInit() {

    this.productObj.getAllProducts().subscribe((data)=>{
      console.log(data);
    },
    (err) =>{
      console.log(err);
    }
    );
   }
}