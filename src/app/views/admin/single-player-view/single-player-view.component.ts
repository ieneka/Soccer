import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerListService } from '../../../services/player-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-player-view',
  templateUrl: './single-player-view.component.html',
  styleUrls: ['./single-player-view.component.css'],
})
export class SinglePlayerViewComponent implements OnInit {
  player: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerListService: PlayerListService,
    private route: Router
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
  deletePlayer(id: string){
    const ok = confirm(`Are you sure you want to delete ${this.player.name}?`)
    if (ok === true){
      this.playerListService.deletePlayer( id ).subscribe();
      this.route.navigate(['/admin/players']);
    }
  }
}
