import { Component, OnDestroy, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';
import { Observable, Subscription } from 'rxjs';
import { GptResponseGetDTO } from '../dtos/dtos';
import { Message } from '../types/types';

@Component({
  selector: 'gpt-message-container',
  template: `
    <div class="d-flex" [ngClass]="{'justify-content-center': !messageList.length, 'align-items-center': !messageList.length}">

      <ng-container *ngIf="messageList.length; else welcome">
        <gpt-message-card-list
          [messageList]="messageList"
        ></gpt-message-card-list>
      </ng-container>

      <!-- welcome -->
      <ng-template #welcome>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="assets/icons/logo.png" alt="logo">
          <p>Ciao, come posso aiutarti?</p>
        </div>
      </ng-template>

    </div>
  `,
  styles: [`

    :host {
      width: 75%;
      height: 90%;
      overflow: scroll;
      scrollbar-width: none;
      margin-bottom: 20px;
    }

    div {
      gap: 24px;
      color: white;
      height: 100%;
    }

    img {
      width: 100px;
      height: 90px;
    }

    p {
      margin-left: 12px;
    }

  `]
})
export class MessageContainerComponent implements OnInit, OnDestroy {

  message$: Observable<Message | undefined> = this.gptService.message$;
  private subscription: Subscription = new Subscription();

  messageList: Message[] = [];


  constructor(private gptService: GptService) { }
  
  ngOnInit(): void {
    this.subscription = this.message$
      .subscribe(response => response && this.messageList.push(response));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
