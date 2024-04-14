import { Injectable, inject } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { switchMap } from 'rxjs';
import { CustomerStoreService } from 'src/app/customer-overview-main/customer-overview/store/customer-store.store';
import { ApiService } from 'src/app/data/api/api.service';
import { Task } from 'src/app/domain/activities/task.entity';
import { refreshSource$ } from 'src/app/shared-stores/reload.store';


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
  private apiService = inject(ApiService);

  private taskSource$ = refreshSource$.pipe(
    switchMap(() => this.apiService.getAllTasks()),
    toSource("[loading task] taskSource$")
  )

  /* constructor() {
    refreshSource$.next(true);
  } */

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
      loadTasks: this.taskSource$
    }
  });

}
