import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOverviewMainComponent } from './user-overview-main.component';

describe('UserOverviewMainComponent', () => {
  let component: UserOverviewMainComponent;
  let fixture: ComponentFixture<UserOverviewMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOverviewMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOverviewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
