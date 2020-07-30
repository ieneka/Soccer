import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-manager-info',
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.css']
})
export class ManagerInfoComponent implements OnInit {
  @ViewChild('select') selectElRef;

  email: string;
  password: string;
  team_name: string;
  resultado: string;

  myOptions = [ 
    {value: 1, name: "Player1"}, 
    {value: 2, name: "Player2"},
    {value: 3, name: "Player3"}];
  selectedValues = ['1','2'];
  myModelProperty = this.myOptions[0];

  constructor() { }

  ngOnInit(): void {
  }

  formularioAdminManager = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    team_name: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit() {
    this.updateSelectList();
  }

  updateSelectList() {
    let options = this.selectElRef.nativeElement.options;
    for(let i=0; i < options.length; i++) {
      options[i].selected = this.selectedValues.indexOf(options[i].value) > -1;
    }
  }
  change(options) {
    this.selectedValues = Array.apply(null,options)  // convert to real Array
      .filter(option => option.selected)
      .map(option => option.value)
  }
  changeOptions() {
    this.selectedValues = ['1','3'];
    this.updateSelectList();
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioAdminManager.valid) {

      // console.log(this.formularioAdminManager.controls)
      // let playersSelected: String[] = this.formularioAdminManager.controls['players'].value;
      // for (let i=0; i < playersSelected.length; i++) {
      //   this.resultado = "Player: " + playersSelected[i];
      // } 
      const allInfo = `Username: ${this.email}. Pwd: ${this.password}. Team Name: ${this.team_name} . ${this.selectedValues}`;
      this.resultado = allInfo; 
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

}
