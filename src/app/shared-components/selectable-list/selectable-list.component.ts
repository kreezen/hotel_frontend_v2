import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/domain/user/user.entity';

@Component({
  selector: 'app-selectable-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent {
  @Input() users: Array<User> = [];
  @Output() userSelected = new EventEmitter<User>();

  selectUser(user: User) {
    this.userSelected.emit(user);
    this.users = []
  }
}
