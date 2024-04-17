import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../types/types';

@Component({
  selector: 'gpt-message-card-list',
  template: `
    <div *ngFor="let message of messageList">
      <gpt-message-card-item 
        [role]="'user'"
        [text]="message.question"
      >
      </gpt-message-card-item>
      <gpt-message-card-item 
        [role]="message.answer.choices.message.role"
        [text]="message.answer.choices.message.content"
      >
      </gpt-message-card-item>
    </div>
  `,
  styles: [
  ]
})
export class MessageCardListComponent implements OnInit {

  @Input() messageList: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
