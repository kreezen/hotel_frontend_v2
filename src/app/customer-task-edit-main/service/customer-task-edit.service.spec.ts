import { TestBed } from '@angular/core/testing';

import { CustomerTaskEditService } from './customer-task-edit.service';

describe('CustomerTaskEditService', () => {
  let service: CustomerTaskEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTaskEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
