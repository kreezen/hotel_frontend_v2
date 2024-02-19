import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchSource$ = new Source<string>('search$');
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
