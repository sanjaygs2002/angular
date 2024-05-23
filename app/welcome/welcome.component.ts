import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CropPredictionService } from '../crop-prediction.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone:true,
  imports:[CommonModule,HttpClientModule,FormsModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  user: { name: string; email: string; loginDateTime: string; lastLogin: string | null } = { name: '', email: '', loginDateTime: '', lastLogin: null };
  soilData = {
    nitrogen: '',
    phosphorous: '',
    potassium: '',
    temperature: '',
    ph: ''
  };
  predictedCrop: string = '';

  constructor(
    private router: Router,
    private cropPredictionService: CropPredictionService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  onSubmit(): void {
    this.cropPredictionService.predictCrop(this.soilData).subscribe(response => {
      this.predictedCrop = response.crop;
    }, error => {
      console.error('Error predicting crop', error);
    });
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
