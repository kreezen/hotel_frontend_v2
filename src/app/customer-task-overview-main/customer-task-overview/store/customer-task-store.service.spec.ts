import { TestBed } from '@angular/core/testing';

import { CustomerTaskStoreService } from './customer-task-store.service';

describe('CustomerTaskStoreService', () => {
  let service: CustomerTaskStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTaskStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
