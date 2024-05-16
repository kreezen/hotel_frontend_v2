import { Component, inject } from '@angular/core';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserAccStoreService, deleteUserSource$ } from '../header/user-acc/store/user-acc-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-overview-main',
  standalone: true,
  imports: [UserOverviewComponent],
  templateUrl: './user-overview-main.component.html',
  styleUrl: './user-overview-main.component.css'
})
export class UserOverviewMainComponent {
  private userStore = inject(UserAccStoreService).usersStore
  users = toSignal(this.userStore.users$)
  deleteUser$ = inject(UserAccStoreService).deleteUser$
  deleteUserSource$ = deleteUserSource$

  constructor() {
    const auto = toSignal(this.deleteUser$)
  }
}
