import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { createAdapter, joinAdapters } from '@state-adapt/core';
import { Source } from '@state-adapt/rxjs';

export interface PageinationState {
  currentPage: number,
  itemsPerPage: number
}

const initPageState: PageinationState = {
  currentPage: 1,
  itemsPerPage: 10
}

export const paginationSources = {
  changeCurrentPage$: new Source<number>('changeCurrenPage$'),
  changeItemsPerPage$: new Source<number>('changeItemsPerPage$')
}


@Injectable({
  providedIn: 'root'
})
export class PaginationStoreService {

  paginationStore = adapt(initPageState, {
    adapter: {
      setCurrentPage: (state, currentPage: number) => {
        return { ...state, currentPage }
      },
      setItemsPerPage: (state, itemsPerPage: number) => {
        return { ...state, itemsPerPage }
      }
    },
    sources: {
      setCurrentPage: paginationSources.changeCurrentPage$,
      setItemsPerPage: paginationSources.changeItemsPerPage$
    }
  })
}
