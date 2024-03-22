import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchByStoreService } from './store/search-by-store.service';

@Component({
  selector: 'app-search-by',
  standalone: true,
  providers: [SearchByStoreService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.css']
})
export class SearchByComponent {
  @Output() searchTerm = new EventEmitter<string>();
  @Input() placeholder = '';
  @Input() enabledSearch = true;
  @Input() selectedString = '';

  searchTermControl = new FormControl('');
  user$ = inject(SearchByStoreService).users$;
  onSearch(searchTerm: string) {
    if (this.enabledSearch && searchTerm.length > 0) {
      this.searchTerm.emit(searchTerm);
    }
  }
}
