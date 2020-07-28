import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
<<<<<<< HEAD
import { PlayersViewComponent } from './views/admin/players-view/players-view.component';
import { SinglePlayerViewComponent } from './views/admin/single-player-view/single-player-view.component';
=======
import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';
import { LandingFooterComponent } from './views/landing-view/landing-footer/landing-footer.component';
>>>>>>> fef07face37aa75191a1bb091fe4073f716a36da
import { LandingInfoComponent } from './views/landing-view/landing-info/landing-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './views/landing-view/header/header.component';
import { ForgotPasswordComponent } from './views/landing-view/header/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    LandingViewComponent,
    PlayersViewComponent,
    SinglePlayerViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
})
@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    LandingInfoComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
=======
    AppComponent, 
    LandingViewComponent, 
    SignUpComponent,
    LandingInfoComponent, 
    PageNotFoundComponent,
    LandingFooterComponent,
    HeaderComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
>>>>>>> fef07face37aa75191a1bb091fe4073f716a36da
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
