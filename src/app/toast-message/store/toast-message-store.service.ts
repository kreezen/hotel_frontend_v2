import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { Source } from '@state-adapt/rxjs';

//evlt auch duration?
export interface ToastMessageState {
  message: string;
  type: 'success' | 'error';
}


const initToastMessageState: ToastMessageState = {
  message: '',
  type: 'success'
}

@Injectable({
  providedIn: 'root'
})
export class ToastMessageStoreService {
  messageSource$ = new Source<ToastMessageState>('[toasting msg] messageSource$');

  toastMessageStore = adapt(initToastMessageState, {
    adapter: {
      toastMsg: (state, newMessage) => {
        return newMessage
      },
    },
    sources: {
      toastMsg: this.messageSource$
    }
  })
  constructor() { }
}
