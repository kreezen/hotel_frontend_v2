import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBoxesComponent } from './filter-boxes.component';

describe('FilterBoxesComponent', () => {
  let component: FilterBoxesComponent;
  let fixture: ComponentFixture<FilterBoxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterBoxesComponent]
    });
    fixture = TestBed.createComponent(FilterBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
