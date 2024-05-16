import { Component, Input, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerStoreService } from './store/customer-store.store';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { paginationOptions } from 'src/app/shared-components/pagination/store/pagination-store.store';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-customer-overview',
  standalone: true,
  providers: [CustomerStoreService],
  imports: [CommonModule, NgxPaginationModule, RouterLink],
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})

export class CustomerOverviewComponent {
  @Input() customers: Customer[] = [];
  @Input() paginationValues: paginationOptions = { currentPage: 1, itemsPerPage: 5, totalItems: 0 };
  deleteClicked = output<string>();
  editClicked = output<Customer>();

  onDelete(id: string) {
    this.deleteClicked.emit(id);
  }

  onEdit(customer: Customer) {
    this.editClicked.emit(customer);
  }

}

