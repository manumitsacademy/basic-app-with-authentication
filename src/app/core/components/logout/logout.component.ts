import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public as:AuthService,public router:Router,public location:Location) { }

  ngOnInit() {
  }
  logout(){
    this.as.isLoggedIn.next(0);
    this.router.navigate(['/login']);
  }
  cancle(){
    this.location.back();
  }
}
