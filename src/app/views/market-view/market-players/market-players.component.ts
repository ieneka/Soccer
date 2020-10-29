import { Component, OnInit } from '@angular/core';
import { SkillFilterComponent } from '../skill-filter/skill-filter.component';


@Component({
  selector: 'app-market-players',
  templateUrl: './market-players.component.html',
  styleUrls: ['./market-players.component.css']
})
export class MarketPlayersComponent implements OnInit {
  players;
  constructor( ) {

   }

  ngOnInit(): void {
  }

}
