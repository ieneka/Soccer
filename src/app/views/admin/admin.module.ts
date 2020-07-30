import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* ngx-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* modules & components */
import { AdminRoutingModule } from './admin-routing.module';
import { PlayerInfoComponent } from './single-player-view/player-info/player-info.component';
import { SkillsBarComponent } from './single-player-view/player-info/skills-bar/skills-bar.component';
import { PlayersViewComponent } from './players-view/players-view.component';
import { SinglePlayerViewComponent } from './single-player-view/single-player-view.component';

@NgModule({
  declarations: [
    PlayerInfoComponent,
    SkillsBarComponent,
    PlayersViewComponent,
    SinglePlayerViewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
