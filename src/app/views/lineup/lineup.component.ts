import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css'],
})
export class LineupComponent {
  title = 'Lineup';
  pepito: number = 4;
  players = [
    {
      name: 'Leo Messi',
      category: 'Goal Kepper',
      img: '/assets/Images/player/thumbnail/p1.png',
    },
    {
      name: 'Ronaldinho Nasario',
      category: 'Forward',
      img: '/assets/Images/player/thumbnail/p2.png',
    },
    {
      name: 'Luis Enrique',
      category: 'Midfielder',
      img: '/assets/Images/player/thumbnail/p3.png',
    },
    {
      name: 'Carles Pujol',
      category: 'Defense',
      img: '/assets/Images/player/thumbnail/p4.png',
    },
    {
      name: 'Andoni Zubizarreta',
      category: 'GoalKeeper',
      img: '/assets/Images/player/thumbnail/p5.png',
    },
    {
      name: 'Rubén Alcalde',
      category: 'Midfielder',
      img: '/assets/Images/player/thumbnail/p6.png',
    },
    {
      name: 'David Villanueva',
      category: 'Defense',
      img: '/assets/Images/player/thumbnail/p7.png',
    },
    {
      name: 'Eric Cantona',
      category: 'Defense',
      img: '/assets/Images/player/thumbnail/p8.png',
    },
  ];

  goalKeppers = [];
  defenders = [];
  midfielders = [];
  forwarders = [];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  Predicate(item: CdkDrag, container: CdkDropList) {
    if (container.data.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  limiterGoalKeeperPredicate = (item: CdkDrag, container: CdkDropList) => {
    let result: boolean;
    if (
      this.goalKeppers.length === 0 &&
      this.goalKeppers.length +
        this.defenders.length +
        this.midfielders.length +
        this.forwarders.length <=
        6
    ) {
      result = true;
    } else if (
      this.goalKeppers.length === 0 &&
      item.dropContainer.id != 'cdk-drop-list-0' &&
      this.goalKeppers.length +
        this.defenders.length +
        this.midfielders.length +
        this.forwarders.length ===
        7
    ) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  limiterPredicate = (item: CdkDrag, container: CdkDropList) => {
    let result: boolean;
    if (
      this.goalKeppers.length +
        this.defenders.length +
        this.midfielders.length +
        this.forwarders.length <=
        6
    ) {
      result = true;
    } else if (
      item.dropContainer.id != 'cdk-drop-list-0' &&
      this.goalKeppers.length +
        this.defenders.length +
        this.midfielders.length +
        this.forwarders.length ===
        7
    ) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
}
