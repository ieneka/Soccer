import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../servicios/player.service';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent implements OnInit {
  player: any = {};

  constructor(private _PlayerService: PlayerService) {}

  ngOnInit(): void {
    this.player = this._PlayerService.getPlayer();
    console.log(this.player);
  }
}
