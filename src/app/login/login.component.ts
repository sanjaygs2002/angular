import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const storedUser = localStorage.getItem('user');
      console.log('Stored user:', storedUser);

      if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('Parsed user:', user);

        if (user.email === email && user.password === password) {
          this.router.navigate(['/welcome']).then(() => {
            console.log('Navigation successful!');
          }).catch(err => {
            console.error('Navigation error:', err);
          });
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      } else {
        this.errorMessage = 'No registered user found';
      }
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
