import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new Subject();
  constructor() { 
    if(window.localStorage.username!=null){
      this.isLoggedIn.next(1);
    }
    else{
      this.isLoggedIn.next(0);
    }
  }
  
  authenticate(){

  }
}
