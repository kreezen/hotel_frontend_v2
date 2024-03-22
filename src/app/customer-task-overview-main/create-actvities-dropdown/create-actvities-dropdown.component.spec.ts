import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActvitiesDropdownComponent } from './create-actvities-dropdown.component';

describe('CreateActvitiesDropdownComponent', () => {
  let component: CreateActvitiesDropdownComponent;
  let fixture: ComponentFixture<CreateActvitiesDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateActvitiesDropdownComponent]
    });
    fixture = TestBed.createComponent(CreateActvitiesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
