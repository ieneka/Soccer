import { Component, OnInit } from '@angular/core';
import { UsersI } from 'src/app/modules/users.interface';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  avatar = 'assets/icons/user.png';
  admin;
  manager;
  email;
  typeUser;

  constructor(private login: LoginService) {}
  user: UsersI;
  ngOnInit(){
   this.user = this.login.getCurrentUser();
   this.typeUser = this.user.type_user;
   if (this.typeUser === 'MANAGER'){
    this.manager = true;
    this.admin = false;
   }else{
     this.manager = false;
     this.admin = true;
   }

  }


}
