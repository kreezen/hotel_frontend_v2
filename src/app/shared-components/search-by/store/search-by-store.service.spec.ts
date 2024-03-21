import { TestBed } from '@angular/core/testing';

import { SearchByStoreService } from './search-by-store.service';

describe('SearchByStoreService', () => {
  let service: SearchByStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
