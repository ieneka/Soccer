import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { ManagersViewComponent } from './views/admin/managers-view/managers-view.component';
import { SingleManagerViewComponent } from './views/admin/single-manager-view/single-manager-view.component';
import { UserListComponentComponent } from './views/admin/managers-view/user-list-component/user-list-component.component';
import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';
import { LandingFooterComponent } from './views/landing-view/landing-footer/landing-footer.component';
import { LandingInfoComponent } from './views/landing-view/landing-info/landing-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './views/landing-view/header/header.component';
import { ForgotPasswordComponent } from './views/landing-view/header/forgot-password/forgot-password.component';
import { ManagerInfoComponent } from './views/admin/single-manager-view/manager-info/manager-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    ManagersViewComponent,
    SingleManagerViewComponent,
    UserListComponentComponent,
    SignUpComponent,
    LandingInfoComponent, 
    PageNotFoundComponent,
    LandingFooterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    ManagerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
