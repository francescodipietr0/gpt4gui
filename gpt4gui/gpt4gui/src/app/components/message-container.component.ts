import { Component, OnDestroy, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';
import { Observable, Subscription } from 'rxjs';
import { GptResponseGetDTO } from '../dtos/dtos';

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

  response$: Observable<GptResponseGetDTO> = this.gptService.message$;
  private subscription: Subscription = new Subscription();

  messageList: GptResponseGetDTO[] = [];


  constructor(private gptService: GptService) { }
  
  ngOnInit(): void {
    this.subscription = this.response$
      .subscribe(response => response && this.messageList.push(response));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
