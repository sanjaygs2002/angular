import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.http.get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
        .subscribe(users => {
          if (users.length > 0) {
            const user = users[0];
            const lastLogin = localStorage.getItem('loginDateTime');
            const loginDateTime = new Date().toString();
            localStorage.setItem('loggedInUser', JSON.stringify({ name: user.name, email: user.email, loginDateTime, lastLogin }));
            localStorage.setItem('loginDateTime', loginDateTime);
            this.router.navigate(['/welcome']);
          } else {
            this.errorMessage = 'Invalid email or password';
          }
        });
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
