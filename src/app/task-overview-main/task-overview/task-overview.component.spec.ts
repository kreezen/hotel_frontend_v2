import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTaskOverviewComponent } from './task-overview.component';

describe('CustomerTaskOverviewComponent', () => {
  let component: CustomerTaskOverviewComponent;
  let fixture: ComponentFixture<CustomerTaskOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerTaskOverviewComponent]
    });
    fixture = TestBed.createComponent(CustomerTaskOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
