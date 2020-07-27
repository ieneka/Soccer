import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { PlayersViewComponent } from './views/admin/players-view/players-view.component';
import { SinglePlayerViewComponent } from './views/admin/single-player-view/single-player-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    PlayersViewComponent,
    SinglePlayerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
