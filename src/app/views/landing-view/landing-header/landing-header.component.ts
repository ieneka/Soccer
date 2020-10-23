import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LoginI } from '../../../models/login.interface';
import { ResponseI } from '../../../models/response.interface';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})

export class LandingHeaderComponent implements OnInit {

  constructor( private login: LoginService) { }

  email: string;
  password: string;
  resultado: string;

  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  onLogin(form: LoginI){
    this.login.onLogin(form).subscribe(data => {
      console.log(data);
    });
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioLogin.valid) {
      const allInfo = `Email: ${this.email}. Pwd: ${this.password}.`;
      this.resultado = allInfo;
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }

}
