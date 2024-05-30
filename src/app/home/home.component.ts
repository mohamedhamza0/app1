
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



  constructor(private _Router:Router,
    private _servce:LoginServiceService
  ){

  }

  ngOnInit(): void { 
    this._servce.setValue(false);
    
  //   console.log(this._Router.url);

  //   if(this._Router.url=='/signup'||this._Router.url.includes("/signup")){
  //     console.log("we are on sign up")
  //   }else{
  //     console.log("heelo")
  //   }

  // localStorage.setItem('isLogged', false.toString());
  // console.log(localStorage.getItem('isLogged'));
  // console.log('home');
  // this._servce.isLogedInsideService=false;
  // console.log( this._servce.isLogedInsideService);

 }



 
    

}
