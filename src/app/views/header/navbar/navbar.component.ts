import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { UsersI } from '../../../modules/users.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login: LoginService) { }
  user: UsersI;
  email;

  ngOnInit(){
    this.user = this.login.getCurrentUser();
    this.email = this.user.email;
  }

}
