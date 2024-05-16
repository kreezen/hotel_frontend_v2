import { Component, input } from '@angular/core';
import { User } from 'src/app/domain/user/user.entity';

@Component({
  selector: 'app-user-overview',
  standalone: true,
  imports: [],
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.css'
})
export class UserOverviewComponent {
  users = input<Array<User>>()

}
