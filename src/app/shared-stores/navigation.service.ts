import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { filter, map, of } from 'rxjs';

export interface NavigationState {
  path: string;
}

const intialNavigationState: NavigationState = {
  path: ''
};

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private router = inject(Router);
  navigationSource$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event) => event.url),
    toSource('[path changed] navigationSource$')
  );

  navigationStore = adapt(intialNavigationState, {
    adapter: {
      path: (state, path: string) => ({ ...state, path })
    },
    sources: {
      path: this.navigationSource$
    }
  })

}
