import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  private player: any[] = [];
  data = [];

  constructor(private http: HttpClient) {}

  getQuery(query: string){
    const url = `http://217.76.158.200:8181/api/${query}`;
    return this.http.get(url);
  }
  getPlayer(): any {
    return this.getQuery('players').pipe(map(data => data['all players']));
  }

  getPlayeri(id: number) {
    return this.getQuery(`players/${id}`).pipe(map(data => data['player']));
  }
  deletePlayeri(id: number){
    const url = `http://217.76.158.200:8181/api/players/${id}`;
    return this.http.delete(url).pipe(map(data => data['player']));
  }
}

export interface Player {
  id: number;
  name: string;
  age: number;
  aka: string;
  img: string;
  team: string;
  keeper: number;
  defense: number;
  passing: number;
  attack: number;
}
