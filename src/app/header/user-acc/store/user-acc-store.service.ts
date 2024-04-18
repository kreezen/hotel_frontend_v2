import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { User } from 'src/app/domain/user/user.entity';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';

export const selectedUserSource$ = new Source<User>('selectedUserSource$');

export interface UserState {
  users: Array<User>
  selectedUser: User | null
}

const initUserState: UserState = {
  users: [],
  selectedUser: null
}

@Injectable({
  providedIn: 'root'
})
export class UserAccStoreService {
  private apiService = inject(ApiService)
  getUsers$ = refreshSource$.pipe(
    switchMap(() =>
      this.apiService.getAllUsers()
    ),
    tap((users) => {
      selectedUserSource$.next(users[0])
    }),
    toSource('[users] getUsers$')
  )

  usersStore = adapt(initUserState, {
    adapter: {
      users: (state, users) => ({ ...state, users }),
      selectedUser: (state, user) => ({ ...state, selectedUser: user }),
      selectors: {
        users: (state) => state.users,
        selectedUser: (state) => state.selectedUser
      }
    },
    sources: {
      users: this.getUsers$,
      selectedUser: selectedUserSource$
    }
  })
}
