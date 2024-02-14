import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerStoreService } from './store/customer-store.service';

@Component({
  selector: 'app-customer-overview',
  standalone: true,
  providers: [CustomerStoreService],
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent {
  customServ = inject(CustomerStoreService)

  constructor() {
  }
}
