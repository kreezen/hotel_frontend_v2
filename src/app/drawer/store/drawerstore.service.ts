import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { NavigationService } from 'src/app/shared-stores/navigation.service';

export interface DrawerState {
  currentPath: string,
  isActive: boolean
}

const intialDrawerState: DrawerState = {
  currentPath: '',
  isActive: false
}

@Injectable({
  providedIn: 'root'
})
export class DrawerstoreService {

  private navigationService = inject(NavigationService)
  private navigationStore = this.navigationService.navigationStore

  drawerStore = adapt(intialDrawerState, {

  })

  constructor() { }
}
