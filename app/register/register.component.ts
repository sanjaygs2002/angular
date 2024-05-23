import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      phoneNumber: ['', Validators.required]
    });
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.http.post('http://localhost:3000/users', userData)
        .subscribe(() => {
          localStorage.setItem('user', JSON.stringify(userData));

          this.router.navigate(['/welcome']).then(() => {
            console.log('Navigation successful!');
          }).catch(err => {
            console.error('Navigation error:', err);
          });
        }, error => {
          console.error('HTTP error:', error);
        });
    }
  }
}
