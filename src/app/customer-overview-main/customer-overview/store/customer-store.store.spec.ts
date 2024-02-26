import { TestBed } from '@angular/core/testing';

import { CustomerStoreService } from './customer-store.store';

describe('CustomerStoreService', () => {
  let service: CustomerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
