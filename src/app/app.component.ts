import { Component, OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ToastMessageStoreService } from './toast-message/store/toast-message-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private toastMessageService = inject(ToastMessageStoreService);
  toastMessageStore = this.toastMessageService.toastMessageStore;

  toastMessage = toSignal(this.toastMessageStore.state$)

  ngOnInit(): void {
    initFlowbite();
  }
  title = 'hotel_frontend_v2';
}
