import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTaskEditComponent } from './task-edit.component';

describe('CustomerTaskEditComponent', () => {
  let component: CustomerTaskEditComponent;
  let fixture: ComponentFixture<CustomerTaskEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerTaskEditComponent]
    });
    fixture = TestBed.createComponent(CustomerTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
