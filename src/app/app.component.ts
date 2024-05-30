import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app1';
  // isSignUp:boolean=true;
  valFromSurvice:boolean=true;
 
  constructor( private _Router:Router,
    private _servce:LoginServiceService
  ) 
  {
    debugger

  }
 


  ngOnInit(): void {
    // console.log( this.valFromSurvice);

  
    this._servce.setValue(true);
    this.valFromSurvice=true;

    // setTimeout(()=>{
      this._servce.getValue().subscribe(value => {
        this.valFromSurvice = value;
        console.log(this.valFromSurvice);
      });

    // },2000)

   
   

    // console.log(this._Router.url);

    // if(this._Router.url=='/signup'||this._Router.url.includes("/signup")){
    //   console.log("we are on sign up");
    //   // this.isSignUp=false;
    // }else{
    //   console.log("hello");

    //   // this.isSignUp=true;
    // }
 

    // return (localStorage.getItem('IsParentLogin') == 'true' ? true : false);





    /*
    1-set for defult val in app done
    2-set for other coms values done
    3-listen on change ion local strage
    */
    // localStorage.setItem('isLogged', true.toString());
    // window.addEventListener("storage", this.listtener);

  //   window.onstorage = () => {
  //     var res= (localStorage.getItem('isLogged') == 'true' ? true : false);
  //     if(res==true){
  //      console.log('sign up flag from listtner')
  //      this.isSignUp=true;
  //      console.log(this.isSignUp);
 
  //     }else{
  //      console.log('sign up flag from listtner')
  //      this.isSignUp=false;
  //      console.log(this.isSignUp);
     
 
  //  }
   // };
    // console.log(this.isSignUp);
    // console.log(localStorage.getItem('isLogged'));
    // console.log(localStorage.getItem('sign up'));

  }

  // listtener(){
  //   debugger

  // //   var res= (localStorage.getItem('isLogged') == 'true' ? true : false);
  // //    if(res==true){
  // //     console.log('sign up flag from listtner')
  // //     this.isSignUp=true;
  // //     console.log(this.isSignUp);

  // //    }else{
  // //     console.log('sign up flag from listtner')
  // //     this.isSignUp=false;
  // //     console.log(this.isSignUp);
  // //    }

  // }


  // ngOnChanges(changes: SimpleChanges): void {
  //   this.valFromSurvice=this._servce.isLogedInsideService;
  //   console.log( this.valFromSurvice);

  //   if(this.valFromSurvice==true){
  //     // this.renderlogin=true;
  //   }else{
  //     // this.renderlogin=false;
  //   }
  // }
}
