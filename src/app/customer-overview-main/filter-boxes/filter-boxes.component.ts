import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filters } from './filters/filters.interface';
import { FilterService } from './store/filter.store';

@Component({
  selector: 'app-filter-boxes',
  standalone: true,
  providers: [FilterService],
  imports: [CommonModule],
  templateUrl: './filter-boxes.component.html',
  styleUrls: ['./filter-boxes.component.css']
})
export class FilterBoxesComponent {
  @Output() filterToggle = new EventEmitter<keyof Filters>();

  onCheckboxChange(checkboxValue: string) {
    this.filterToggle.emit(checkboxValue as keyof Filters);
  }
}
