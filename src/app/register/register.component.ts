import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User data saved:', userData);
      this.router.navigate(['/welcome']).then(() => {
        console.log('Navigation successful!');
      }).catch(err => {
        console.error('Navigation error:', err);
      });
    }
  }
}
