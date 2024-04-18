import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-dropdown',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './create-dropdown.component.html',
  styleUrls: ['./create-dropdown.component.css']
})
export class CreateDropdownComponent {

}
