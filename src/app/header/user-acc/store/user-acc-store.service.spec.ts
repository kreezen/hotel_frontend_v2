import { TestBed } from '@angular/core/testing';

import { UserAccStoreService } from './user-acc-store.service';

describe('UserAccStoreService', () => {
  let service: UserAccStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
