import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOverviewMainComponent } from './customer-overview-main.component';

describe('CustomerOverviewMainComponent', () => {
  let component: CustomerOverviewMainComponent;
  let fixture: ComponentFixture<CustomerOverviewMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerOverviewMainComponent]
    });
    fixture = TestBed.createComponent(CustomerOverviewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
