import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOptionsSelectorComponent } from './car-options-selector.component';

describe('CarOptionsSelectorComponent', () => {
  let component: CarOptionsSelectorComponent;
  let fixture: ComponentFixture<CarOptionsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarOptionsSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarOptionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
