import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, LoginComponent, FormsModule , SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'EASYCHATT';
}
