import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';

import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { User } from 'src/app/domain/user/user.entity';

export const userNameSeachSource$ = new Source<string>('[search-by] userNameSource$');
/* export const userNameSeachSource$ = new BehaviorSubject<string>('');  */
export interface SearchBy {
  users: Array<User>
}

const initSearchByState: SearchBy = {
  users: []
}

@Injectable({
  providedIn: 'root'
})
export class SearchByStoreService {
  apiService = inject(ApiService);
  users$ = userNameSeachSource$.pipe(
    tap((userName) => console.log(userName.payload)),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((userName) => this.apiService.getUsersBySubstring(userName.payload)),
    toSource('[search-by] users$'),
  )
  searchByStore = adapt(initSearchByState, {
    adapter: {
      users: (state, users) => ({ ...state, users }),
    },
    sources: {
      users: this.users$
    }
  })
}
