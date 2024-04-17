import { Component, Input, OnInit } from '@angular/core';
import { GptResponseGetDTO } from '../dtos/dtos';
import { Message } from '../types/types';

@Component({
  selector: 'gpt-message-card-list',
  template: `
    <div *ngFor="let message of messageList">
      <div>{{ message.question }}</div>
      <div>{{ message.answer.choices.message.content }}</div>
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
