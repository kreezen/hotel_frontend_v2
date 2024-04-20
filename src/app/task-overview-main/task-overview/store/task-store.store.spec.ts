import { TestBed } from '@angular/core/testing';

import { CustomerTaskStoreService } from './task-store.store';

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
