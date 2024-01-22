import { TestBed } from '@angular/core/testing';

import { CarCatalogueService } from './car-catalogue.service';

describe('CarCatalogueService', () => {
  let service: CarCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
