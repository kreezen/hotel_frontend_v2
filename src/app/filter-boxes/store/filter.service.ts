import { Injectable } from '@angular/core';
import { Filters } from '../filters/filters.interface';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';

const initFilterState: Filters = {
  taskDone: false,
  invoicePaid: false
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterToggleSource$ = new Source<keyof Filters>('filterToggle$');

  filterStore = adapt(initFilterState, {
    adapter: {
      toggleFilter: (state, filterName: keyof Filters) => ({
        ...state,
        [filterName]: !state[filterName]
      })
    },
    sources: {
      toggleFilter: this.filterToggleSource$
    }
  });
}
