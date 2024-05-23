import { Component } from '@angular/core';
import { CropPredictionService } from '../crop-prediction.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crop-input',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule],
  templateUrl: './crop-input.component.html',
  styleUrls: ['./crop-input.component.css']
})
export class CropInputComponent {
  soilData = {
    nitrogen: '',
    phosphorous: '',
    potassium: '',
    temperature: '',
    ph: ''
  };

  predictedCrop: string = ''; // Initialize the property here

  constructor(private cropPredictionService: CropPredictionService) { }

  onSubmit(): void {
    this.cropPredictionService.predictCrop(this.soilData).subscribe(response => {
      this.predictedCrop = response.crop;
    }, error => {
      console.error('Error predicting crop', error);
    });
  }
}
