import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LoginI } from '../../../modules/login.interface';
import { UsersI } from '../../../modules/users.interface';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})

export class LandingHeaderComponent implements OnInit {
 users: UsersI[];
  constructor( private login: LoginService) { }

  email: string;
  password: string;
  resultado: string;

  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(){
  }


  onLogin(resultado: LoginI){
    this.login.onLogin(resultado).subscribe(data => {
      console.log(data);
    });
  }

  /*
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioLogin.valid) {
      this.onLogin(this.formularioLogin.value);
      console.log(this.formularioLogin.value);
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }
}
