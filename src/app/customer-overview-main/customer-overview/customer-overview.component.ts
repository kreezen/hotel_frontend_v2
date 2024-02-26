import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerStoreService } from './store/customer-store.store';
import { Customer } from 'src/app/data/entities/customer.entity';

export interface paginationOptions {
  currentPage: number,
  itemsPerPage: number,
  totalItems: number
}

@Component({
  selector: 'app-customer-overview',
  standalone: true,
  providers: [CustomerStoreService],
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})

export class CustomerOverviewComponent {
  @Input() customers: Customer[] = [];
  @Input() paginationValues: paginationOptions = { currentPage: 1, itemsPerPage: 10, totalItems: 0 };
}

