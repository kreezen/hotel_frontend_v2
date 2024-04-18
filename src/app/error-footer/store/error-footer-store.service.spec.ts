import { TestBed } from '@angular/core/testing';

import { ErrorFooterStoreService } from './error-footer-store.service';

describe('ErrorFooterStoreService', () => {
  let service: ErrorFooterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorFooterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
