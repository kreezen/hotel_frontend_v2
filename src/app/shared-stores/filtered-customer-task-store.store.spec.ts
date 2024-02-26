import { TestBed } from '@angular/core/testing';

import { FilteredCustomerTaskStoreService } from './filtered-customer-task-store.store';

describe('FilteredCustomerTaskStoreService', () => {
  let service: FilteredCustomerTaskStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredCustomerTaskStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
