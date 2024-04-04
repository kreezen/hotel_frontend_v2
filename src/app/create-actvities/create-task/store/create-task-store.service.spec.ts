import { TestBed } from '@angular/core/testing';

import { CreateTaskStoreService } from './create-task-store.service';

describe('CreateTaskStoreService', () => {
  let service: CreateTaskStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTaskStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
