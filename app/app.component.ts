import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CropInputComponent } from './crop-input/crop-input.component';


@Component({
  selector: 'app-root',

  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule,ContactUsComponent,CropInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application';
}


