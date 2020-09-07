import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private player: Player[] = [
    {
      id: 1,
      name: 'Messi',
      age: 33,
      aka: 'LM10',
      img: '/assets/Images/player/messi.jpg',
      team: 'FC Barcelona',
      keeper: 25,
      defense: 75,
      passing: 100,
      attack: 100,
    },
    {
      id: 2,
      name: 'Cristiano',
      age: 35,
      aka: 'CR7',
      img: '/assets/Images/player/cristiano.jpg',
      team: 'Juventus FC',
      keeper: 0,
      defense: 50,
      passing: 100,
      attack: 100,
    },
  ];

  constructor() {}

  getPlayer(): Player[] {
    return this.player;
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
