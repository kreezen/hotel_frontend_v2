import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';

@Component({
  selector: 'app-create-actvities',
  standalone: true,
  imports: [CommonModule, CreateTaskComponent],
  templateUrl: './create-actvities.component.html',
  styleUrls: ['./create-actvities.component.css']
})
export class CreateActvitiesComponent {

}
