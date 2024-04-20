import { TestBed } from '@angular/core/testing';

import { CustomerTaskOverviewService } from './task-overview.service';

describe('CustomerTaskOverviewService', () => {
  let service: CustomerTaskOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTaskOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
