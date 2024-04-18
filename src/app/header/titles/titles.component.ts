import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from 'src/app/shared-stores/navigation.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { titles } from './store/header.titles';

@Component({
  selector: 'app-titles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {

  navigationStore = inject(NavigationService).navigationStore
  urlSignal = toSignal(this.navigationStore.state$)

  translate(url: string): string {
    return titles[url]
  }
}
