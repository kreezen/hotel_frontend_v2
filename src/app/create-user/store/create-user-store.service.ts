import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Source, toSource } from '@state-adapt/rxjs';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

import { refreshUserSource$ } from 'src/app/shared-stores/reload.store';
import { toastMessageSource$ } from 'src/app/toast-message/store/toast-message-store.store';

export interface CreateUser {
  username: string;
}

export const createUserSource$ = new Source<CreateUser>("[create user] createUserSource$");
@Injectable({
  providedIn: 'root'
})
export class CreateUserStoreService {

  apiService = inject(ApiService);
  createUser$ = createUserSource$.pipe(
    switchMap((user) => this.apiService.createUser(user.payload).pipe(
      catchError((err) => {
        toastMessageSource$.next({ message: 'User konnte nicht erstellt werden', type: 'error' })
        return of(err)
      }
      ),
      tap((data) => {
        if (!(data instanceof Error || HttpErrorResponse)) {
          toastMessageSource$.next({ message: 'User erfolgreich erstellt', type: 'success' })
          refreshUserSource$.next(true)
        }
      }),
    )
    ),
    toSource('[created user] createUser$')
  )
}
