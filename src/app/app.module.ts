import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {PopupGreetingsComponent} from './popup-greetings/popup-greetings.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebpageNotFoundComponent} from './webpage-not-found/webpage-not-found.component';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  }, {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: '**',
    component: WebpageNotFoundComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PopupGreetingsComponent,
    DashboardComponent,
    WebpageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
