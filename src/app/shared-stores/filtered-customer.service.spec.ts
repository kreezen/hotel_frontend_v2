import { TestBed } from '@angular/core/testing';

import { FilteredCustomerService } from './filtered-customer.service';

describe('FilteredCustomerService', () => {
  let service: FilteredCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
