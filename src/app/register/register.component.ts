import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordCheck } from '../validation'; //validation file
import { LoginService } from '../service/login.service';
import { url } from '../constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  regisForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,  private userObj: LoginService) {

    this.regisForm = this.fb.group(
      {
          'name': ['', Validators.required],
          'email': ['', [
              Validators.required,
              Validators.email
           ]],
          'phone': ['', [
            Validators.required,
            Validators.maxLength(10)
          ]],       
         'password': ['', [Validators.required]],
         'confirm_password': ['', [Validators.required, passwordCheck]], //passwordCheck is custom validation
      }
    );

  //this below will trigger confirm password validation also on change value of password field
  this.regisForm.controls.password.valueChanges
  .subscribe(
    x => this.regisForm.controls.confirm_password.updateValueAndValidity()
  );
}

ngOnInit(){

}

  //hit service registration method to save data 
  Registration(data){
    // console.log('dsa');
    // console.log(data);
    // console.log(`${url}login/registration`);
    this.http.post(`${url}login/registration`, {data}).subscribe((data)=>{
      console.log(data);
    },
    (err) =>{
      console.log(err);
    }

    );
  }
}
