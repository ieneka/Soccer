import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { ManagersViewComponent } from './views/admin/managers-view/managers-view.component';
import { SingleManagerViewComponent } from './views/admin/single-manager-view/single-manager-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    ManagersViewComponent,
    SingleManagerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
