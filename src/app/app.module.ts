import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL, API_URL } from './data/api/config/api.config';
import { defaultStoreProvider } from '@state-adapt/angular';
import { RouterModule, Routes } from '@angular/router';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorFooterComponent } from './error-footer/error-footer.component';


const routes: Routes = [
  {
    path: 'customer-overview',
    loadComponent: () => import('./customer-overview-main/customer-overview-main.component').then(m => m.CustomerOverviewMainComponent)
  },
  {
    path: 'customer-tasks',
    loadComponent: () => import('./customer-task-overview-main/customer-task-overview-main.component').then(m => m.CustomerTaskOverviewMainComponent)
  },
  {
    path: 'customer-tasks/edit',
    loadComponent: () => import('./customer-task-edit-main/customer-task-edit-main.component').then(m => m.CustomerTaskEditMainComponent)
  },
  {
    path: 'customer-tasks/create',
    loadComponent: () => import('./create-actvities/create-actvities.component').then(m => m.CreateActvitiesComponent)
  },
  {
    path: 'create/customer',
    loadComponent: () => import('./create-customer/create-customer.component').then(m => m.CreateCustomerComponent)
  },
  {
    path: 'create/user',
    loadComponent: () => import('./create-user/create-user.component').then(m => m.CreateUserComponent)
  }
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
    ToastMessageComponent,
    ErrorFooterComponent
  ],
  providers: [
    defaultStoreProvider,
    { provide: API_URL, useValue: API_BASE_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
