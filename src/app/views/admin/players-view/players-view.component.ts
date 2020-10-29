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
  playersData: any;
  // pagination
  currentPage = 1;
  itemsPerPage = 6;
  pageSize: number;
  // error api
  error: boolean;


  constructor(public playerListService: PlayerListService) {
    this.player = [];
    this.error = false;
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize + num;
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
      }, ( errorService) => {
        this.error = true;
        console.log(errorService);
      });
    }
  }

}

