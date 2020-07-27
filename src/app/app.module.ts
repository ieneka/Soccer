import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { LandingFooterComponent } from './views/landing-view/landing-footer/landing-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    LandingFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
