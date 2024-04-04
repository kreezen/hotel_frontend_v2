import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectedListItemSource$ } from './store/slectable-list-store.service';
import { Task } from 'src/app/domain/activities/task.entity';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { User } from 'src/app/domain/user/user.entity';

interface SelectableItem {
  [key: string]: any;
}

@Component({
  selector: 'app-selectable-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent<T extends SelectableItem> {
  @Input() items: Array<T> = [];
  @Input() keyToDisplay = ''
  @Output() selectedItem = new EventEmitter<T>();

  selectItem(item: T) {
    this.selectedItem.emit(item);
    this.items = []
  }
}
