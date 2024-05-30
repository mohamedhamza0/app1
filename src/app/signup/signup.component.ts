import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators} from '@angular/forms';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor( private _Router:Router) 
  {
    debugger

  }



  // ngOnInit(): void {
   

  //   console.log(this._Router.url);

  //   if(this._Router.url=='/signup'||this._Router.url.includes("/signup")){
  //     console.log("we are on sign up")
  //   }
  // }
  resgisterForm:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , ]),
    rePassword:new FormControl(null , [Validators.required , ]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  })
  handleRegister(resgisterForm:FormGroup)
  {
    
  }


  openHome(){
    this._Router.navigate(['/home']);

  }
}
