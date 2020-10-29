import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamI } from '../modules/team.interface';
import { UsersI } from '../modules/users.interface';
import { BestPlayersI } from '../modules/bestPlayers.interface';
import { PlayersI } from '../modules/playersTeam.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private urlApi = 'http://217.76.158.200:8181';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    console.log('service ready');
  }

  showTeam(id): Observable<TeamI> {
    const urlApi = 'http://217.76.158.200:8181/api/teams/' + id;
    return this.http.get<TeamI>(urlApi)
    .pipe(map(data => data));
  }

  getCurrentId(): Observable<UsersI>{
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(currentUser);
    const id = (user.team_id).toString();
    return id;
  }

  getBestPlayers(id): Observable<BestPlayersI>{
    const urlApi = 'http://217.76.158.200:8181/api/teams/' + id + '/bests';
    return this.http.get<BestPlayersI>(urlApi);
  }

  getPlayers(id): Observable<PlayersI>{
    const urlApi = 'http://217.76.158.200:8181/api/players/teams/' + id;
    return this.http.get<PlayersI>(urlApi);
  }

}
