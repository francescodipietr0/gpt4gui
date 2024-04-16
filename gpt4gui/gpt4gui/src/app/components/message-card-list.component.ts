import { Component, Input, OnInit } from '@angular/core';
import { GptResponseGetDTO } from '../dtos/dtos';

@Component({
  selector: 'gpt-message-card-list',
  template: `
    <div *ngFor="let message of messageList">
      {{ message.choices.message.content }}
    </div>
  `,
  styles: [
  ]
})
export class MessageCardListComponent implements OnInit {

  @Input() messageList: GptResponseGetDTO[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
