import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './store/search.store';

@Component({
  selector: 'app-search',
  standalone: true,
  providers: [SearchService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  searchTermControl = new FormControl('');

  constructor() { }
}
