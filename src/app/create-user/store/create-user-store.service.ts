import { Injectable, inject } from '@angular/core';
import { Source, getRequestSources, toSource } from '@state-adapt/rxjs';
import { BehaviorSubject, Subject, catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/data/api/api.service';
import { refreshSource$, refreshUserSource$ } from 'src/app/shared-stores/reload.store';
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
    switchMap((user) => this.apiService.createUser(user.payload)),
    catchError(() => {
      toastMessageSource$.next({ message: 'User konnte nicht erstellt werden', type: 'error' })
      return of(Error('Couldnt create user'))
    }
    ),
    tap((data) => {
      if (!(data instanceof Error)) {
        toastMessageSource$.next({ message: 'User erfolgreich erstellt', type: 'success' })
        refreshUserSource$.next(true)
      }
    }),
    toSource('[created user] createUser$')
  )
}
