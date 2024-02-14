import { Component, OnInit } from '@angular/core';
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
export class PaginationComponent implements OnInit {
  changeCurrentPage$ = paginationSources.changeCurrentPage$;
  changeItemsPerPage$ = paginationSources.changeItemsPerPage$;

  pageSizeControl = new FormControl(1);

  constructor(private paginationStoreService: PaginationStoreService) {
    this.pageSizeControl.valueChanges.subscribe((pageSize) => {
      if (pageSize === null) return;
      if (typeof pageSize === 'string') {
        pageSize = parseInt(pageSize);
      }
      pageSize = pageSize! < 1 ? 1 : pageSize;
      this.changeItemsPerPage$.next(pageSize);
    });

  }
  ngOnInit(): void {
    console.log('paginationStoreService');
    this.paginationStoreService.paginationStore.state$.subscribe((state) => {
      console.log('state', state);
    }
    )
  }
}
