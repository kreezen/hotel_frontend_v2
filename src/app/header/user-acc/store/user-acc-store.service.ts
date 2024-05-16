import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

import { User } from 'src/app/domain/user/user.entity';
import { refreshSource$, refreshUserSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';

export const selectedUserSource$ = new Source<User>('selectedUserSource$');

export interface UserState {
  users: Array<User>
  selectedUser: User | null
}

const initUserState: UserState = {
  users: [],
  selectedUser: null
}

export const deleteUserSource$ = new Source<string>('[delete user] deleteUserSource$');

@Injectable({
  providedIn: 'root'
})
export class UserAccStoreService {
  private apiService = inject(ApiService)

  deleteUser$ = deleteUserSource$.pipe(
    switchMap((val) => this.apiService.deleteUser(val.payload).pipe(
      catchError((err) => {
        toastMessageSource$.next({ message: 'User konnte nicht gelöscht werden', type: 'error' })
        return of(err)
      }),
      tap((data) => {
        if (!(data instanceof Error || data instanceof HttpErrorResponse)) {
          toastMessageSource$.next({ message: 'User wurde erfolgreich gelöscht', type: 'success' })
          refreshUserSource$.next(true)
          refreshSource$.next(true)
        }
      })
    ))
  )

  getUsers$ = refreshUserSource$.pipe(
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
