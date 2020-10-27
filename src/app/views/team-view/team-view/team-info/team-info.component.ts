import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../services/team.service';
import { TeamI } from '../../../../modules/team.interface';
import { PlayersI } from '../../../../modules/playersTeam.interface';
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  constructor(private team: TeamService) {}

  teamData: TeamI;
  playersTeam;

  name;
  foundationDate;

  ngOnInit() {
    const id = this.team.getCurrentId();
    this.team.showTeam(id).subscribe((data) => {
      this.teamData = data['team'];
      this.name = this.teamData.name;
      this.foundationDate = this.teamData.foundation_date;
    });
    this.team.getPlayers(id).subscribe(data =>{
      this.playersTeam = data['all players by team id'].length;
    });
  }
}
