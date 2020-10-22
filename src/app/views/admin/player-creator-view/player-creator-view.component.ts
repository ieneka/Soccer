import { Component, OnInit } from '@angular/core';
import { PlayerListService } from '../../../services/player-list.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PlayerModel } from '../../../modules/player-model';

@Component({
  selector: 'app-player-creator-view',
  templateUrl: './player-creator-view.component.html',
  styleUrls: ['./player-creator-view.component.css']
})
export class PlayerCreatorViewComponent implements OnInit {

  player: PlayerModel = new PlayerModel();

  constructor( private playerListService: PlayerListService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'new' ) {

      this.playerListService.getPlayeri( id )
        .subscribe( (resp: PlayerModel) => {
          this.player = resp;
          this.player.id = id;
        });

    }
  }

  save(form: NgForm){
    if (form.invalid) {
      console.log('formulario invalido');
      return;
    }

    if( this.player.id ){
      this.playerListService.updatePlayer( this.player).subscribe(resp => {
        console.log(resp);
      });
    }else{
      this.playerListService.newPlayer( this.player).subscribe(resp => {
        console.log(resp);
        this.player = resp;
      });
    }
  }

}

