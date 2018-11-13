import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public as:AuthService) { }
  flag;
  ngOnInit() {
    this.as.isLoggedIn.subscribe((res)=>{
      this.flag=res;
    });
  }

}
