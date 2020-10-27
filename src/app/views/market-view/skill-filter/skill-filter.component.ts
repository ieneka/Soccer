import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.css']
})
export class SkillFilterComponent implements OnInit {

  minYears: number[];
  maxYears: number[];

  rangeAttack = 5;
  rangeDefense = 5;
  rangePass = 5;
  rangeKeeper = 5;


  constructor() {
    this.minYears = new Array ( 100 ).fill( 0 ).map( (x, i) => i + 1);
    this.maxYears = new Array ( 100 ).fill( 0 ).map( (x, i) => 100 - i - 1);

  }

  ngOnInit(): void {
  }

  valueAttack(e) {
    this.rangeAttack = e.target.value;
  }
  valueDefense(e) {
    this.rangeDefense = e.target.value;
  }
  valuePass(e) {
    this.rangePass = e.target.value;
  }
  valueKeeper(e) {
    this.rangeKeeper = e.target.value;
  }
}
