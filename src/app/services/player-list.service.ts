import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlayerModel } from '../modules/player-model';



@Injectable({
  providedIn: 'root'
})
export class PlayerListService {

  private url = 'http://217.76.158.200:8181/api';

  constructor( private http: HttpClient) { }

  deletePlayer( id: string){
    return this.http.delete(`${this.url}/players/${id}`);
  }

  getPlayers(){
    return this.http.get(`${this.url}/players`)
          .pipe(map(data => data['all players']))
  }

  getPlayeri(id: string) {
    return this.http.get(`${this.url}/players/${id}`).pipe(map(data => data['player']));
  }

  newPlayer(player: PlayerModel){

    return this.http.post(`${this.url}/players`, player)
          .pipe(map((resp: any) => {
            player.id = resp.id;
            return player;
          }));
  }

  updatePlayer(player: PlayerModel){

    return this.http.put(`${this.url}/players/${player.id}`, player);

  }
}


