import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the registration form with form controls and validators
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  // Method triggered when the form is submitted
  onRegisterSubmit() {
    if (this.registerForm.valid) {
      // Form is valid, you can submit or process the data
      console.log(this.registerForm.value);

      // For demonstration, navigate to a welcome page after successful registration
      this.router.navigate(['/welcome']);
    }
  }
}
