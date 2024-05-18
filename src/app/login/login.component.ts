import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLoginSubmit() {
    // Add your login logic here
    console.log('Login form submitted');
  }

  navigateToRegister() {
    // Navigate to the registration page
    this.router.navigate(['/register']);
  }
}
