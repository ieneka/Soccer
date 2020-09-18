import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchCreatorViewComponent } from './match-creator-view.component';

const routes: Routes = [
  { path: 'matchcreator', component: MatchCreatorViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchCreatorRoutingModule {}
