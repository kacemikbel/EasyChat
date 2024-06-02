import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router'; // Import Routes here

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideClientHydration()
  ]
};
