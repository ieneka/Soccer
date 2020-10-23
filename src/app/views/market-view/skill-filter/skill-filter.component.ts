import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.css']
})
export class SkillFilterComponent implements OnInit {

  years: number[];
  rangeAttack: number = 5;
  rangeDefense: number = 5;
  rangePass: number = 5;
  rangeKeeper: number = 5;


  constructor() {

    this.years = new Array ( 100 ).fill( 0 ).map( (x, i) => i + 1);

  }

  ngOnInit(): void {
  }

  valueAttack(e) {
    console.log(e);
    this.rangeAttack = e.target.value;
  }
  valueDefense(e) {
    console.log(e);
    this.rangeDefense = e.target.value;
  }
  valuePass(e) {
    console.log(e);
    this.rangePass = e.target.value;
  }
  valueKeeper(e) {
    console.log(e);
    this.rangeKeeper = e.target.value;
  }
}
