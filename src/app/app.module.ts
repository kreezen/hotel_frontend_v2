import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from './data/api/config/api.config';
import { defaultStoreProvider } from '@state-adapt/angular';
import { FilteredCustomerService } from './shared-stores/filtered-customer.store';
import { RouterModule, Routes } from '@angular/router';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { CustomerTaskEditMainComponent } from './customer-task-edit-main/customer-task-edit-main.component';
import { CustomerTaskStoreService } from './customer-task-overview-main/customer-task-overview/store/customer-task-store.store';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: '/customer-tasks/edit', pathMatch: 'full' },
  { path: 'customer-overview', loadComponent: () => import('./customer-overview-main/customer-overview-main.component').then(m => m.CustomerOverviewMainComponent) },
  { path: 'customer-tasks', loadComponent: () => import('./customer-task-overview-main/customer-task-overview-main.component').then(m => m.CustomerTaskOverviewMainComponent) },
  { path: 'customer-tasks/edit', loadComponent: () => import('./customer-task-edit-main/customer-task-edit-main.component').then(m => m.CustomerTaskEditMainComponent) }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DrawerComponent,
    RouterModule.forRoot(routes),
    HeaderComponent,
    BrowserAnimationsModule,
    ToastMessageComponent
  ],
  providers: [
    defaultStoreProvider,
    { provide: API_URL, useValue: "hey" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
