import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerStoreService } from './store/customer-store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Customer } from '../data/entities/customer.entity';

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

export interface paginationOptions {
  currentPage: number,
  itemsPerPage: number,
  totalItems: number
}