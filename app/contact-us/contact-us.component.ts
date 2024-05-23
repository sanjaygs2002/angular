import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.sendMessage(this.contactForm.value).subscribe(
        response => {
          console.log('Message sent successfully', response);
          alert('Message sent successfully');
        },
        error => {
          console.error('Error sending message', error);
          alert('Error sending message');
        }
      );
    }
  }
  

  sendMessage(data: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/send';
    return this.http.post(apiUrl, data, { responseType: 'text' });
  }
}
