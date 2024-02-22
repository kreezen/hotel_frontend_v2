import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTaskOverviewMainComponent } from './customer-task-overview-main.component';

describe('CustomerTaskOverviewMainComponent', () => {
  let component: CustomerTaskOverviewMainComponent;
  let fixture: ComponentFixture<CustomerTaskOverviewMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerTaskOverviewMainComponent]
    });
    fixture = TestBed.createComponent(CustomerTaskOverviewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
