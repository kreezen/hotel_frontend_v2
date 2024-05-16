import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { User } from 'src/app/domain/user/user.entity';

@Component({
  selector: 'app-user-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.css'
})
export class UserOverviewComponent {
  users = input<Array<User>>()
  deleteClicked = output<string>()

  onDelete(id: string) {
    this.deleteClicked.emit(id)
  }

}
