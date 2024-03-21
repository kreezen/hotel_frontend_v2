import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from 'src/app/domain/activities/task.entity';
import { DatepickerComponent } from 'src/app/shared-components/datepicker/datepicker.component';
import { SearchByComponent } from 'src/app/shared-components/search-by/search-by.component';
import { SearchByStoreService, userNameSeachSource$ } from 'src/app/shared-components/search-by/store/search-by-store.service';
import { SelectableListComponent } from 'src/app/shared-components/selectable-list/selectable-list.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from 'src/app/domain/user/user.entity';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';



@Component({
  selector: 'app-customer-task-edit',
  standalone: true,
  providers: [SearchByStoreService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatepickerComponent, SearchByComponent, SelectableListComponent, SpinnerComponent],
  templateUrl: './customer-task-edit.component.html',
  styleUrls: ['./customer-task-edit.component.css']
})
export class CustomerTaskEditComponent implements OnInit {
  @Input() task: Task | null = null
  @Output() submitTask: EventEmitter<Task> = new EventEmitter<Task>()
  selectedUser: string = ''
  searchEnabled: boolean = true
  usersState = inject(SearchByStoreService).searchByStore.state$
  userSignal = toSignal(this.usersState)

  private fb = new FormBuilder()
  taskForm: FormGroup = new FormGroup({})

  ngOnInit() {
    this.taskForm = this.createTaskForm(this.fb, this.task!)
  }

  createTaskForm(fb: FormBuilder, task: Task): FormGroup {
    return fb.group({
      title: task.createdBy.username,
      description: task.description,
    })
  }

  onSubmit() {
    const user = {
      id: 'wasd',
      username: 'peter',
    }
    const task: Task = {
      createdBy: user,
      id: 'kek',
      modifiedOn: new Date(),
      modifiedBy: user,
      assignedTo: user,
      dueDate: new Date(),
      createdOn: new Date(),
      description: this.taskForm.value.description,
      isCompleted: this.task!.isCompleted,

    }
    this.submitTask.emit(task)
  }

  onSearchChanges(event: string) {
    userNameSeachSource$.next(event)
  }

  disableSearchAfterSelection(timeout: number) {
    this.searchEnabled = false
    setTimeout(() => {
      this.searchEnabled = true
    }, timeout)
  }

  onUserSelected(user: User) {
    this.disableSearchAfterSelection(200)
    this.selectedUser = user.username
  }
}
