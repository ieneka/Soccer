import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { TeamViewComponent } from './views/team-view/team-view/team-view.component';
import { LineupComponent } from './views/lineup/lineup.component';
// import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingViewComponent },
  { path: 'landing', component: LandingViewComponent },
  { path: 'team', component: TeamViewComponent },
  { path: 'line-up', component: LineupComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  //[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
