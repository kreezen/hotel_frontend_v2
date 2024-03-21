import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastMessageState } from './store/toast-message-store.store';
import { Subject, timer, takeUntil } from 'rxjs';


@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css'],
  animations: [
    trigger('toastAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class ToastMessageComponent implements OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toastMessage']) {
      this.showNotification();
    }
  }

  @Input() toastMessage: ToastMessageState = { message: 'a', type: 'success' };
  @Input() duration: number = 3000;
  @Output() resetToast = new EventEmitter<void>();

  toastState = ''; // Hide the toast initially
  private destroy$ = new Subject<void>(); // For managing subscriptions

  showNotification() {
    this.toastState = 'in';

    timer(this.duration)
      .pipe(takeUntil(this.destroy$)) // Complete on destroy or new toast
      .subscribe({
        complete: () => {  // Use complete callback
          this.toastState = '';
          this.resetToast.emit();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(); // Emit on component destruction
    this.destroy$.complete();
  }
  /* showNotification() {
    this.toastState = 'in'; // Show the toast
    setTimeout(() => {
      this.toastState = ''; // Hide the toast after 3 seconds
      this.resetToast.emit();
    }, this.duration);
  } */
}
