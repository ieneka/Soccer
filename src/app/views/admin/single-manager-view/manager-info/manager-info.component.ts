import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-manager-info',
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.css']
})
export class ManagerInfoComponent implements OnInit {

  email: string;
  password: string;
  team_name: string;
  resultado: string;

  players = [
    'Player1',
    'Player2',
    'Player3',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  formularioAdminManager = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    team_name: new FormControl('', [Validators.required]),
  });

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioAdminManager.valid) {

      let playersSelected: String[] = this.formularioAdminManager.controls['players'].value;
      for (let i=0; i < playersSelected.length; i++) {
        console.log("Player: " + playersSelected[i]);
      } 
      const allInfo = `Username: ${this.email}. Pwd: ${this.password}. Team Name: ${this.team_name}.`;
      this.resultado = allInfo; 
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

}
