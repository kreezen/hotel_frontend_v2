import { TestBed } from '@angular/core/testing';

import { SearchStoreService } from './search.store';

describe('SearchService', () => {
  let service: SearchStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
