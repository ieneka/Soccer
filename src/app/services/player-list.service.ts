import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlayerModel } from '../modules/player-model';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PlayerListService {

  private url = 'http://217.76.158.200:8181/api';

  constructor( private http: HttpClient,
               private Router: ActivatedRoute) { }

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

  filteredPlayer( maxAge, minAge, defense, attack, keeper, pass ){
    console.log('service', maxAge, minAge, defense, attack,  keeper, pass);

    // return this.http.get( `${this.url}/sales?max-age=${maxAge}&min-age=${minAge}&defense=${defense}&attack=${attack}&keeper=${keeper}&pass=${pass}`)
    //       .pipe(map(data => data['filtered sales']));

    return this.http.get( `${this.url}/sales?max-age=99&min-age=1&defense=1&attack=1&keeper=1&pass=1`);


  }

}


