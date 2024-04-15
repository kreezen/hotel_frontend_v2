import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from 'src/app/domain/activities/task.entity';
import { DatepickerComponent } from 'src/app/shared-components/datepicker/datepicker.component';
import { SearchByComponent } from 'src/app/shared-components/search-by/search-by.component';
import { SearchByStoreService, userNameSearchSource$ } from 'src/app/shared-components/search-by/store/search-by-store.service';
import { SelectableListComponent } from 'src/app/shared-components/selectable-list/selectable-list.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from 'src/app/domain/user/user.entity';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { formatDate } from 'src/app/utils/time.date';


const pepeuser = {
  id: "1acee9b1-c71f-4156-9cd0-40ef7ac4f4f7",
  username: "pepe"
}

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
  searchEnabled: boolean = true
  selectedUser: User = pepeuser

  usersState = inject(SearchByStoreService).searchByUserStore.state$
  userSignal = toSignal(this.usersState)

  private fb = new FormBuilder()
  taskForm: FormGroup = new FormGroup({})

  ngOnInit() {
    this.disableSearchAfterSelection(200)
    this.selectedUser = this.task?.assignedTo ?? pepeuser
    this.taskForm = this.createTaskForm(this.fb, this.task!)
  }

  formatDate(date: Date): string {
    return formatDate(date);
  }

  createTaskForm(fb: FormBuilder, task: Task): FormGroup {
    return fb.group({
      description: task.description,
      isCompleted: task.isCompleted,
      dueDate: task.dueDate
    })
  }

  onSubmit() {
    const task: Task = {
      id: this.task!.id,
      createdBy: pepeuser,
      customerId: this.task!.customerId,
      modifiedOn: new Date(),
      modifiedBy: pepeuser,
      assignedTo: this.selectedUser!,
      dueDate: this.taskForm.value.dueDate,
      createdOn: this.task!.createdOn,
      description: this.taskForm.value.description,
      isCompleted: this.taskForm.value.isCompleted,
    }
    this.submitTask.emit(task)
  }

  onSearchChanges(event: string) {
    userNameSearchSource$.next(event)
  }

  disableSearchAfterSelection(timeout: number) {
    this.searchEnabled = false
    setTimeout(() => {
      this.searchEnabled = true
    }, timeout)
  }

  onDateChanged(date: string) {
    this.taskForm.get('dueDate')?.setValue(date)
  }

  onUserSelected(user: any) {
    this.disableSearchAfterSelection(200)
    this.selectedUser = user as User
  }
}
