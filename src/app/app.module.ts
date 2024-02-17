import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from './data/api/config/api.config';
import { defaultStoreProvider } from '@state-adapt/angular';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { FilterBoxesComponent } from './filter-boxes/filter-boxes.component';
import { FilteredCustomerService } from './shared-stores/filtered-customer.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerOverviewComponent,
    HttpClientModule,
    PaginationComponent,
    SearchComponent,
    FilterBoxesComponent
  ],
  providers: [
    defaultStoreProvider,
    FilteredCustomerService,
    { provide: API_URL, useValue: "hey" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
