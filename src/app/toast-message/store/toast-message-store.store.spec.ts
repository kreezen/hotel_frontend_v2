import { TestBed } from '@angular/core/testing';

import { ToastMessageStoreService } from './toast-message-store.store';

describe('ToastMessageStoreService', () => {
  let service: ToastMessageStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastMessageStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
