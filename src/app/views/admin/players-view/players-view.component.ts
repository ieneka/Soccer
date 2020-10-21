import { Component, OnInit } from '@angular/core';
import { PlayerListService } from '../../../services/player-list.service';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css'],
})
export class PlayersViewComponent implements OnInit {
  headers = ['Player Name', 'Team'];
  player: any = {};

  constructor(private playerListService: PlayerListService) {
    this.playerListService.getPlayers().subscribe(
      (data: any) => {
        console.log(data);
        this.player = data;
        console.log(this.player);
      }
    );
  }

  ngOnInit(): void {
    this.player = this.playerListService.getPlayers();
    console.log(this.player);
  }

  deletePlayer(id: string){
    const ok = confirm(`Está seguro que desea borrar a este jugador?`);
    if (ok == true){
      this.playerListService.deletePlayer( id ).subscribe();
    }
  }

}

