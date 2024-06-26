import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchStoreService {

  searchSource$ = new Source<string>('[search string] searchSource$');
  searchStore = adapt("", {
    adapter: {
      search: (state, searchTerm: string) => searchTerm
    },
    sources: {
      search: this.searchSource$
    }
  })
  constructor() { }
}
