import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropInputComponent } from './crop-input.component';

describe('CropInputComponent', () => {
  let component: CropInputComponent;
  let fixture: ComponentFixture<CropInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
