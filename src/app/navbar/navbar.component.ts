import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _servce:LoginServiceService,
    private _Router:Router
   ){

  }







  signOut(){
    this._servce.setValue(true);
    this._Router.navigate(['/signup']);
  
  
  
   }

}
