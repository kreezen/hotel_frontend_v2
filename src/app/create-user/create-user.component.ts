import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserStoreService, createUserSource$ } from './store/create-user-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm: FormGroup;
  createUser$ = inject(CreateUserStoreService).createUser$


  constructor(private fb: FormBuilder) {
    this.userForm = this.createUserForm(this.fb)
    const asd = toSignal(this.createUser$)
  }

  createUserForm(fb: FormBuilder): FormGroup {
    return fb.group({
      username: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.userForm.valid) {
      const createUser = this.userForm.value
      console.log(createUser)
      createUserSource$.next(createUser)
    }
  }
}
