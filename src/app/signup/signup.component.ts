import { Component } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms';
import {NgIf} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  SignupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    

  });
  onSubmit() {
    console.warn(this.SignupForm.value);
  }






}
