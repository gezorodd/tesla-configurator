import { TestBed } from '@angular/core/testing';

import { CarCatalogService } from './car-catalog.service';

describe('CarCatalogService', () => {
  let service: CarCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
