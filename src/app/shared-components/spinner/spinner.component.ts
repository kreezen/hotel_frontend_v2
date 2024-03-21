import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, debounceTime, finalize, map, startWith, take, tap } from 'rxjs';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @Input('appSpinner') isLoading$: Observable<any> = new Observable();
  subscription = new Subscription();
  isLoading = false;

  ngOnInit() {
    if (this.isLoading$) {
      this.subscription = this.isLoading$.pipe(
        tap(() => (this.isLoading = true)),
        debounceTime(300),
        finalize(() => (this.isLoading = false))
      ).subscribe(() =>
        this.isLoading = false
      );
    }
  }
}
