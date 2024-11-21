import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToasterComponent } from './shared/shared/toaster/toaster.component';
import { LandingPageComponent } from './auth/landing-page/landing-page.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignInComponent },
  // { path: 'trial', component: TrialComponent },
  { path: 'a', component: ToasterComponent },
  // { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }, // Wildcard route at the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
