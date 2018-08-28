import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {PopupGreetingsComponent} from './popup-greetings/popup-greetings.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const App_Routes: Routes = [
  {
    path: 'welcome',
    canActivate: [AuthGuard],
    component: PopupGreetingsComponent
  }, {
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
  }];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PopupGreetingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(App_Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
