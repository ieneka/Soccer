import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';

const routes: Routes = [{ 
  path: '', component: LandingViewComponent }];

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
