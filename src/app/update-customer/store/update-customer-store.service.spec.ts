import { TestBed } from '@angular/core/testing';

import { UpdateCustomerStoreService } from './update-customer-store.service';

describe('UpdateCustomerStoreService', () => {
  let service: UpdateCustomerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCustomerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
