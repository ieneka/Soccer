import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../services/team.service';
import { BestPlayersI } from '../../../../modules/bestPlayers.interface';

@Component({
  selector: 'app-best-players-layout',
  templateUrl: './best-players-layout.component.html',
  styleUrls: ['./best-players-layout.component.css']
})
export class BestPlayersLayoutComponent implements OnInit {

  constructor(private team: TeamService) { }

  bestPlayers: BestPlayersI;
  defender;
  keeper;
  passer;
  shooter;

  ngOnInit() {
    const id = this.team.getCurrentId();
    this.team.getBestPlayers(id).subscribe(data => {
      this.bestPlayers = data;
      this.defender = data['defender:'];
      this.keeper = data['keeper:'];
      this.passer = data['passer:'];
      this.shooter = data['shooter:'];
    });
  }

}
