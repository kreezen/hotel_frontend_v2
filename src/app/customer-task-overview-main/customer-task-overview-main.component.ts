import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTaskOverviewComponent } from './customer-task-overview/customer-task-overview.component';
import { SearchComponent } from '../search/search.component';
import { CustomerTaskOverviewService } from './service/customer-task-overview.service';
import { CreateActvitiesDropdownComponent } from './create-actvities-dropdown/create-actvities-dropdown.component';



@Component({
  selector: 'app-customer-task-overview-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskOverviewComponent, SearchComponent, CreateActvitiesDropdownComponent],
  templateUrl: './customer-task-overview-main.component.html',
  styleUrls: ['./customer-task-overview-main.component.css']
})
export class CustomerTaskOverviewMainComponent {
  private customerTaskOverviewService = inject(CustomerTaskOverviewService);
  searchChange$ = this.customerTaskOverviewService.searchChange$
  customerTasks = this.customerTaskOverviewService.customerTasks
  taskClicked$ = this.customerTaskOverviewService.taskClicked$

}
