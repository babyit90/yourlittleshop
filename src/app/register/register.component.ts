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
         'email': ['', [
             Validators.required,
            , Validators.email]
            ],
         'phone': ['', [
           Validators.required,
           Validators.maxLength(10)
          ]],
        
          'password': ['', [Validators.required]],
          'confirm_password': ['', [Validators.required, passwordConfirming]],
      }
     );
    }
     passwordConfirming(datas) {
      console.log('hurrah');
      console.log(datas);
   }
   

   
   Registration(data){
    console.log( this.regisForm );
   }
  ngOnInit() {
  }

}
