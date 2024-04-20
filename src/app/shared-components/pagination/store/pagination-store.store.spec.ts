import { TestBed } from '@angular/core/testing';

import { PaginationStoreService } from './pagination-store.store';

describe('PaginationStoreService', () => {
  let service: PaginationStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
