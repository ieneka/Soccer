import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerInfoComponent } from './single-player-view/player-info/player-info.component';
import { SkillsBarComponent } from './single-player-view/player-info/skills-bar/skills-bar.component';
import { PlayersViewComponent } from './players-view/players-view.component';
import { SinglePlayerViewComponent } from './single-player-view/single-player-view.component';

const routes: Routes = [
  { path: 'admin/players', component: PlayersViewComponent },
  { path: 'admin/player/:id', component: SinglePlayerViewComponent },
  { path: 'admin/player/skills', component: SkillsBarComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
