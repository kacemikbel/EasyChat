import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  userDetails = {
    email: '',
    address: ''
  };

  submitForm(userForm: NgForm): void {
    if (userForm.valid) {
      
      console.log('Form submitted successfully!', this.userDetails);
      
      userForm.resetForm();
    } else {
      
      console.log('Form is invalid. Please check your inputs.');
    }
  }
}
