import { TestBed } from '@angular/core/testing';

import { CarSettingsService } from './car-settings.service';

describe('CarConfigurationServiceService', () => {
  let service: CarSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
