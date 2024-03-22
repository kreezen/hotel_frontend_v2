import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from 'src/app/shared-components/datepicker/datepicker.component';
import { SearchByComponent } from 'src/app/shared-components/search-by/search-by.component';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { SelectableListComponent } from 'src/app/shared-components/selectable-list/selectable-list.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from 'src/app/domain/activities/task.entity';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchByStoreService, customerNameSearchSource$, userNameSearchSource$ } from 'src/app/shared-components/search-by/store/search-by-store.service';
import { Customer } from 'src/app/domain/customer/customer.entity';

@Component({
  selector: 'app-create-task',
  standalone: true,
  providers: [SearchByStoreService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatepickerComponent, SearchByComponent, SpinnerComponent, SelectableListComponent],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Input() task: Task | null = null
  @Output() submitTask: EventEmitter<Task> = new EventEmitter<Task>()
  selectedCustomer: string = ''
  searchEnabled: boolean = true
  customersState = inject(SearchByStoreService).searchByCustomerStore.state$
  customerSignal = toSignal(this.customersState)

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
    console.log(event)
    customerNameSearchSource$.next(event)
  }

  disableSearchAfterSelection(timeout: number) {
    this.searchEnabled = false
    setTimeout(() => {
      this.searchEnabled = true
    }, timeout)
  }

  onSelectedCustomer(customer: any) {
    this.disableSearchAfterSelection(200)
    this.selectedCustomer = (customer as Customer).lastName
  }
}
