import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../shared-stores/navigation.service';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  private navigationService = inject(NavigationService)
  navigatiionPath = toSignal(this.navigationService.navigationStore.state$)


}
