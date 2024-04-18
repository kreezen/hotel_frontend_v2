import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccStoreService, selectedUserSource$ } from './store/user-acc-store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from 'src/app/domain/user/user.entity';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-acc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-acc.component.html',
  styleUrls: ['./user-acc.component.css']
})
export class UserAccComponent {
  userStore = inject(UserAccStoreService).usersStore;
  userSignal = toSignal(this.userStore.users$);
  selectedUserSignal = toSignal(this.userStore.selectedUser$);

  onSelectUser(event: any) {
    const index = event.target.value as number
    const user = this.userSignal()![index]
    selectedUserSource$.next(user);
  }
}
