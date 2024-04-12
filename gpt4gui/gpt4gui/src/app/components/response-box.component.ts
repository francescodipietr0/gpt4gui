import { Component, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';

@Component({
  selector: 'gpt-response-box',
  template: `
    <div>
      {{ response$ | async }}
    </div>
  `,
  styles: [`

    :host {
      width: 75%;
      height: 90%;
    }

    div {
      color: white;
    }

  `]
})
export class ResponseBoxComponent implements OnInit {

  response$ = this.gptService.response$;

  constructor(private gptService: GptService) { }

  ngOnInit(): void {
  }

}
