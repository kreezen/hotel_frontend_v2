import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from 'src/app/shared-components/datepicker/datepicker.component';
import { SearchByComponent } from 'src/app/shared-components/search-by/search-by.component';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { SelectableListComponent } from 'src/app/shared-components/selectable-list/selectable-list.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTask, Task } from 'src/app/domain/activities/task.entity';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchByStoreService, customerNameSearchSource$, userNameSearchSource$ } from 'src/app/shared-components/search-by/store/search-by-store.service';
import { Customer } from 'src/app/domain/customer/customer.entity';
import { User } from 'src/app/domain/user/user.entity';
import { UserAccStoreService } from 'src/app/header/user-acc/store/user-acc-store.service';



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
  @Output() submitTask = new EventEmitter<CreateTask>()
  userAccSignal = toSignal(inject(UserAccStoreService).usersStore.selectedUser$)
  selectedCustomer: string = ''
  selectedUser: string = ''
  searchEnabled: boolean = true

  usersSearchState = inject(SearchByStoreService).searchByUserStore.state$
  userSearchSignal = toSignal(this.usersSearchState)
  customersState = inject(SearchByStoreService).searchByCustomerStore.state$
  customerSignal = toSignal(this.customersState)

  private fb = new FormBuilder()
  taskForm: FormGroup = new FormGroup({})

  ngOnInit() {
    this.taskForm = this.createTaskForm(this.fb)
  }

  createTaskForm(fb: FormBuilder): FormGroup {
    return fb.group({
      customerId: ["", Validators.required],
      dueDate: ["", Validators.required],
      description: ["", Validators.required],
      assignedTo: [null, Validators.required],
      createdBy: [null, Validators.required],
    })
  }

  formControlByName(formcontrolName: string): AbstractControl<any, any> | null {
    return this.taskForm.get(formcontrolName)
  }

  onDateChanged(date: string) {
    this.formControlByName('dueDate')?.setValue(date)
  }

  onSubmit() {
    this.formControlByName('createdBy')?.setValue(this.userAccSignal()!)
    console.log(this.taskForm.value)
    if (this.taskForm.valid) {
      const task: CreateTask = {
        customerId: this.taskForm.value.customerId,
        description: this.taskForm.value.description,
        dueDate: this.taskForm.value.dueDate,
        createdBy: this.taskForm.value.createdBy,
        assignedTo: this.taskForm.value.assignedTo
      }
      this.submitTask.emit(task)
    }
  }

  onSearchCustomerChanges(event: string) {
    customerNameSearchSource$.next(event)
  }

  onSearchUserChanges(event: string) {
    userNameSearchSource$.next(event)
  }

  disableSearchAfterSelection(timeout: number) {
    this.searchEnabled = false
    setTimeout(() => {
      this.searchEnabled = true
    }, timeout)
  }

  onSelectedCustomer(customer: any) {
    this.disableSearchAfterSelection(200)
    const customerC = (customer as Customer)
    this.selectedCustomer = customerC.lastName
    this.formControlByName('customerId')?.setValue(customerC.id)
  }
  onUserSelected(user: any) {
    this.disableSearchAfterSelection(200)
    const userC = (user as User)
    this.selectedUser = userC.username
    this.formControlByName('assignedTo')?.setValue(userC)

  }
}
