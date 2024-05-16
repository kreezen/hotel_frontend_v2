import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchStoreService } from './store/search.store';

@Component({
  selector: 'app-search',
  standalone: true,
  providers: [SearchStoreService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  @Input() placeholder = '';
  searchTermControl = new FormControl('');

  constructor() { }
}
