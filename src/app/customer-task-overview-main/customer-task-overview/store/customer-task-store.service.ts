import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { toSource } from '@state-adapt/rxjs';
import { CustomerStoreService } from 'src/app/customer-overview-main/customer-overview/store/customer-store.service';
import { Task } from 'src/app/data/entities/task.entity';

export interface TaskState {
  tasks: Task[];
  error: string;
}

const initState: TaskState = {
  tasks: [],
  error: ""
}

@Injectable({
  providedIn: 'root'
})
export class CustomerTaskStoreService {
  private customerStore = inject(CustomerStoreService);
  customerTasksSource$ = this.customerStore.customerStore.tasks$.pipe(toSource('[deriving tasks] customerTasks$'))


  customerTaskStore = adapt(initState, {
    adapter: {
      loadTasks: (state, newState) => {
        return { ...state, tasks: newState }
      },
      selectors: {
        tasks: state => state.tasks
      }
    },
    sources: {
      loadTasks: this.customerTasksSource$
    }
  });

}
