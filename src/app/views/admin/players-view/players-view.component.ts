import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerListService } from '../../../services/player-list.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css'],
})
export class PlayersViewComponent implements OnInit {
  headers = ['Player Name', 'Team'];
  player: any = {};
  playersData: any;


  constructor(public playerListService: PlayerListService) {
    this.player = [];
  }

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers(){
    this.playerListService.getPlayers().subscribe(
      (data: any) => {
        console.log(data);
        this.player = data;
        console.log(this.player);
      }
    );
  }

  deletePlayer(id: string){
    const ok = confirm(`Are you sure you want to delete this player?`);
    if (ok === true){
      this.playerListService.deletePlayer( id ).subscribe(response => {
        this.getAllPlayers();
      });
    }
  }

}

