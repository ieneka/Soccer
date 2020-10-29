import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { UsersI } from '../../../modules/users.interface';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private login: LoginService) { }
  user: UsersI;
  email;

  ngOnInit(){
    this.user = this.login.getCurrentUser();
    this.email = this.user.email;
  }
  logout(){
    this.login.logoutUser();
  }


}
