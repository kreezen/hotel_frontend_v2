import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../drawer/drawer.component';
import { RouterLink } from '@angular/router';
import { TitlesComponent } from './titles/titles.component';
import { CreateDropdownComponent } from './create-dropdown/create-dropdown.component';
import { UserAccComponent } from './user-acc/user-acc.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DrawerComponent, RouterLink, TitlesComponent, CreateDropdownComponent, UserAccComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
