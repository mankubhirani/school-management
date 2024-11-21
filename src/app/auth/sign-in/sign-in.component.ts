import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user = {
    email: '',
    password: '',
  };

  // Handle Form Submission
  onSubmit() {
    console.log('User Login Details:', this.user);
    // Add logic to handle login (API call)
  }

  // Google Login Function
  onGoogleLogin() {
    console.log('Google Login Clicked');
    // Add Google Login Logic
  }
}
