import { Component } from '@angular/core';
import { GptService } from './services/gpt.service';

@Component({
  selector: 'gpt-root',
  template: `
    <div class="container col-9">

      <input type="text" [(ngModel)]="prompt">
      <button (click)="gptService.invokeGpt(prompt)">Send</button>
    </div>
  `,
  styles: [`

    @import '../styles/colors.scss';
    .container {
      height: 100%;
      background: $bg-dark;
    }

  `]
})
export class AppComponent {

  title = 'gpt4gui';
  prompt = "";

  constructor(public gptService: GptService) {}

}
