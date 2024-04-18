import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserStoreService, createUserSource$ } from './store/create-user-store.service';

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
    this.createUser$.subscribe((user) => console.log(user))
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
