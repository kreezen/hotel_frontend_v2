import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTaskEditMainComponent } from './customer-task-edit-main.component';

describe('CustomerTaskEditMainComponent', () => {
  let component: CustomerTaskEditMainComponent;
  let fixture: ComponentFixture<CustomerTaskEditMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerTaskEditMainComponent]
    });
    fixture = TestBed.createComponent(CustomerTaskEditMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
