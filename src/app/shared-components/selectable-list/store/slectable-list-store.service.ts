import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';
import { Task } from 'src/app/domain/activities/task.entity';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { User, initUser } from 'src/app/domain/user/user.entity';

export const selectedListItemSource$ = new Source<SelectedItemState<Task | Customer | User>>('[selectable-list] selectableListSource$');
export interface SelectedItemState<T> {
  selectedItem: T
}

const initState = {
  selectedItem: initUser
}


@Injectable({
  providedIn: 'root'
})
export class SlectableListStoreService {
  slectedItemStore = adapt(initState, {
    adapter: {
      selectedItem: (state, selectedItem) => ({ ...state, selectedItem }),
      selectors: {
        asUser: (state) => {
          if (state.selectedItem instanceof User)
            return state.selectedItem as User
          return null
        },
        asTask: (state) => {
          if (state.selectedItem instanceof Task)
            return state.selectedItem as Task
          return null
        },
      }
    },
    sources: {
      selectedItem: selectedListItemSource$
    }
  })
}
