import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../types/types';

@Component({
  selector: 'gpt-message-card-item',
  template: `
    <div class="d-flex message-card" [class.answer]="role !== 'user'">
      <div class="d-flex justify-content-center align-items-start">
        <img 
          [src]="role !== 'user' ? 'assets/icons/logo.png' : 'assets/icons/user.png'" 
          alt="icon that identify who is asking / answering"
        >
      </div>
      <div class="d-flex flex-column">
        <div>
          {{ getRoleLabel() }}
        </div>
        <div>
          {{ text }}
        </div>
      </div>
    </div>
  `,
  styles: [`

    .message-card {
      gap: 20px;
      // margin: 14px 0;
      margin: 18px 0;
    }

    img {
      width: 24px;
      height: 24px;
    }

    // .answer {
    //   margin-bottom: 40px;
    // }

  `]
})
export class MessageCardItemComponent implements OnInit {

  @Input() role: Role | undefined;
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getRoleLabel(): string {
    switch(this.role){
      case "system": 
      case "assistant":
        return "ChatDPT";

      case "user":
        return "Tu";

      default:
        return "Error";
    }
  }

}
