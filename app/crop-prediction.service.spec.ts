import { TestBed } from '@angular/core/testing';

import { CropPredictionService } from './crop-prediction.service';

describe('CropPredictionService', () => {
  let service: CropPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
