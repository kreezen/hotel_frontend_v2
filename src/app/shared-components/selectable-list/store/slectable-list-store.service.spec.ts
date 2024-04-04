import { TestBed } from '@angular/core/testing';

import { SlectableListStoreService } from './slectable-list-store.service';

describe('SlectableListStoreService', () => {
  let service: SlectableListStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlectableListStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
