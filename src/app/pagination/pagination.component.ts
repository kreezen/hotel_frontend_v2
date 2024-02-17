import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationStoreService, paginationSources } from './store/pagination-store.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  providers: [PaginationStoreService],
  imports: [CommonModule, NgxPaginationModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Output() changeCurrentPage = new EventEmitter<number>();
  @Output() changeItemsPerPage = new EventEmitter<number>();
  pageSizeControl = new FormControl(1);

}
