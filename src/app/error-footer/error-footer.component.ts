import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFooterStoreService } from './store/error-footer-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-error-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-footer.component.html',
  styleUrls: ['./error-footer.component.css']
})
export class ErrorFooterComponent {
  errorFooterStore = inject(ErrorFooterStoreService).errorFooterStore
  footerErrorsSignal = toSignal(this.errorFooterStore.footerErrors$)
}
