import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { HeaderComponent } from './views/header/header.component';
import { NavbarComponent } from './views/header/navbar/navbar.component';
import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';
import { LandingFooterComponent } from './views/landing-view/landing-footer/landing-footer.component';
import { LandingInfoComponent } from './views/landing-view/landing-info/landing-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LandingHeaderComponent } from './views/landing-view/landing-header/landing-header.component';
import { ForgotPasswordComponent } from './views/landing-view/landing-header/forgot-password/forgot-password.component';
import { AdminModule } from './views/admin/admin.module';
import { AdminNavbarComponent } from './views/header/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    SignUpComponent,
    LandingInfoComponent,
    PageNotFoundComponent,
    LandingFooterComponent,
    LandingHeaderComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    NavbarComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
