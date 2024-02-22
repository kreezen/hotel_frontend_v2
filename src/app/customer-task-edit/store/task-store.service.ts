import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';
import { Task } from 'src/app/data/entities/task.entity';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {
  taskClickedSource$ = new Source<Task>('[task edit] taskClickedSource$')

  taskStore = adapt(null, {
    adapter: {
      taskClicked: (state, newState) => newState
    },
    sources: {
      taskClicked: this.taskClickedSource$
    }
  })
  constructor() { }
}
