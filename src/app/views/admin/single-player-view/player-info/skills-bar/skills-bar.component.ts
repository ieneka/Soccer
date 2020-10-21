import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerListService } from '../../../../../services/player-list.service';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent implements OnInit {
  player: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerListService: PlayerListService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getPlayeri(params['id']);
    });
  }

  ngOnInit(): void {}

  getPlayeri(id: string){
    this.playerListService.getPlayeri(id).subscribe(
      (data: any) => {
        this.player = data;
        console.log(this.player);
      }
    );
      }
}

