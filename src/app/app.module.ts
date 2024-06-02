import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module'; 


const routes: Routes = [
  { path: 'login', 
   redirectTo: '/signup',
   pathMatch: 'full'
 },
 { path: 'signup', 
   redirectTo: '/login',
   pathMatch: 'full'
 },
  
];






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
