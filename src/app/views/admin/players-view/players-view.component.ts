import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from '../single-player-view/player-info/servicios/player.service';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css'],
})
export class PlayersViewComponent implements OnInit {

  constructor(private _PlayerService: PlayerService) {
    this._PlayerService.getPlayer().subscribe(
      (data: any) => {
        console.log(data);
        this.player = data;
        console.log(this.player);
      }
    );
  }


  headers = ['Player Name', 'Team'];
  player: any[] = [{}];


  ngOnInit(): void {
    this.player = this._PlayerService.getPlayer();
    console.log(this.player);
  }

  deletePlayeri(id: number){
    this._PlayerService.deletePlayeri(id).subscribe(
      (data: any) => {
        this.player = data;
        console.log(this.player);
      });
    }

}
