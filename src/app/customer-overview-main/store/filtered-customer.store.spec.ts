import { TestBed } from '@angular/core/testing';

import { FilteredCustomerStoreService } from './filtered-customer.store';

describe('FilteredCustomerService', () => {
  let service: FilteredCustomerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredCustomerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
