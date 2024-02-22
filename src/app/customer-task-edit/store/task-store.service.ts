import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';
import { Task } from 'src/app/data/entities/task.entity';

const initTaskState: Task = {
  titel: "asd",
  descreption: "",
  isDone: false,
  id: 0
}

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {
  taskClickedSource$ = new Source<Task>('[task edit] taskClickedSource$')

  taskStore = adapt(initTaskState, {
    adapter: {
      taskClicked: (state, newState) => {
        console.log(newState)
        return newState
      },
      selectors: {
        task: state => state
      }
    },
    sources: {
      taskClicked: this.taskClickedSource$
    }
  })
  constructor() { }
}
