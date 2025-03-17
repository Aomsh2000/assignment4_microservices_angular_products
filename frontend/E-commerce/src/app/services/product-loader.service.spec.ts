import { TestBed } from '@angular/core/testing';

import { ProductLoaderService } from './product-loader.service';

describe('ProductLoaderService', () => {
  let service: ProductLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
