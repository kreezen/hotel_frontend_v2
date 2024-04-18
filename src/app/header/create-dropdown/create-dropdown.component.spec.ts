import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDropdownComponent } from './create-dropdown.component';

describe('CreateDropdownComponent', () => {
  let component: CreateDropdownComponent;
  let fixture: ComponentFixture<CreateDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateDropdownComponent]
    });
    fixture = TestBed.createComponent(CreateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
