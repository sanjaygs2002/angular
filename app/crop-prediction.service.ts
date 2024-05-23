import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropPredictionService {
  private apiUrl = 'http://localhost:3001/predict'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  predictCrop(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
