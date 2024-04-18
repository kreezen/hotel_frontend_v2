import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFooterComponent } from './error-footer.component';

describe('ErrorFooterComponent', () => {
  let component: ErrorFooterComponent;
  let fixture: ComponentFixture<ErrorFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorFooterComponent]
    });
    fixture = TestBed.createComponent(ErrorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
