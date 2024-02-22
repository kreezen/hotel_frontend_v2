import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskStoreService } from './customer-task-edit/store/edit-task-store.service';
import { CustomerTaskEditComponent } from './customer-task-edit/customer-task-edit.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-task-edit-main',
  standalone: true,
  imports: [CommonModule, CustomerTaskEditComponent],
  templateUrl: './customer-task-edit-main.component.html',
  styleUrls: ['./customer-task-edit-main.component.css']
})
export class CustomerTaskEditMainComponent {

  private taskStoreService = inject(EditTaskStoreService)
  task = toSignal(this.taskStoreService.taskStore.state$)

  constructor() {

  }
}
