import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {
  // isLogedInsideService:boolean=true;
  private valueSubject = new BehaviorSubject<boolean>(true);  // Replace `number` with the type of your global value

  constructor() { }



  getValue() {
    return this.valueSubject.asObservable();
  }

  setValue(newValue: boolean) {
    this.valueSubject.next(newValue);
  }

}
