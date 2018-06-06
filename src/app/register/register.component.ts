import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regisForm: FormGroup;
  constructor(private fb: FormBuilder) {
     this.regisForm = fb.group(
       {
         'name': ['', Validators.required],
         'email': ['', Validators.required],
         'password': ['', Validators.required]
       }
     )
   }

   Registration(data){
     console.log(data);
   }
  ngOnInit() {
  }

}
