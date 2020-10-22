import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.css']
})
export class SkillFilterComponent implements OnInit {

  years: number[];

  constructor() {

    this.years = new Array ( 100 ).fill( 0 ).map( (x, i) => i + 1);
    
  }

  ngOnInit(): void {
  }

}
