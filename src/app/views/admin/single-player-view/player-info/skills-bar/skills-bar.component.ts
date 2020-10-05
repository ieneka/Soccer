import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../servicios/player.service';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent implements OnInit {
  player: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _PlayerService: PlayerService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getPlayeri(params['id']);
    });
  }

  ngOnInit(): void {}

  getPlayeri(id: number){
    this._PlayerService.getPlayeri(id).subscribe(
      (data: any) => {
        this.player = data;
        console.log(this.player);
      }
    );
      }
}
