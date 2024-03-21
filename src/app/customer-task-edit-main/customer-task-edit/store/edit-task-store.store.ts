import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source, toSource } from '@state-adapt/rxjs';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/domain/activities/task.entity';


const initTaskState: Task = Task.initState()

export const taskClickedSource$ = new BehaviorSubject<Task>(initTaskState);

@Injectable({
  providedIn: 'root'
})
export class EditTaskStoreService {
  private taskClickedSource$ = taskClickedSource$.pipe(toSource('[task edit] taskClickedSource$'))

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
