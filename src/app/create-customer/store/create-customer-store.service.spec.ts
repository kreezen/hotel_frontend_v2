import { TestBed } from '@angular/core/testing';

import { CreateCustomerStoreService } from './create-customer-store.service';

describe('CreateCustomerStoreService', () => {
  let service: CreateCustomerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCustomerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
