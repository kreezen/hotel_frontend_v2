import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';

export interface paginationOptions {
  currentPage: number,
  itemsPerPage: number,
  totalItems: number
}
export interface PageinationState {
  currentPage: number,
  itemsPerPage: number
}

const initPageState: PageinationState = {
  currentPage: 1,
  itemsPerPage: 5
}

// needed if shared state
export const paginationSources = {
  changeCurrentPage$: new Source<number>('[pagination] changeCurrenPage$'),
  changeItemsPerPage$: new Source<number>('[pagination] changeItemsPerPage$')
}


@Injectable({
  providedIn: 'root'
})
export class PaginationStoreService {

  changeCurrentPage$ = new Source<number>('changeCurrenPage$')
  changeItemsPerPage$ = new Source<number>('changeItemsPerPage$')

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
      setCurrentPage: this.changeCurrentPage$,
      setItemsPerPage: this.changeItemsPerPage$
    }
  })
}
