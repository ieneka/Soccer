import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamI } from '../modules/team.interface';
import { isNullOrUndefined } from 'util';
import { UsersI } from '../modules/users.interface';
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


  /* getStats(id): Observable<StatsI>{
    const urlApi = 'http://217.76.158.200:8181/api/team/' + id + '/stats';
    return this.http.get<StatsI>(urlApi);
  }

  getBestPlayers(id): Observable<BestPlayersI>{
    const urlApi = 'http://217.76.158.200:8181/api/team/' + id + '/bests';
  } */

}
