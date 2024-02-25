import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { BehaviorSubject } from 'rxjs';
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
export class EditTaskStoreService {
  taskClickedSource = new BehaviorSubject<Task>(initTaskState)
  private taskClickedSource$ = this.taskClickedSource.pipe(toSource('[task edit] taskClickedSource$'))

  taskStore = adapt(initTaskState, {
    adapter: {
      taskClicked: (state, newState) => {
        console.log(newState)
        return newState
      },
    },
    sources: {
      taskClicked: this.taskClickedSource$
    }
  })

}