import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActvitiesComponent } from './create-actvities.component';

describe('CreateActvitiesComponent', () => {
  let component: CreateActvitiesComponent;
  let fixture: ComponentFixture<CreateActvitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateActvitiesComponent]
    });
    fixture = TestBed.createComponent(CreateActvitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
