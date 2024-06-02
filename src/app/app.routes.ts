import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'signup-component', component: SignupComponent },
  { path: '',   redirectTo: '/login-component', pathMatch: 'full' }
];
