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
      width: 100%;
      height: 90%;
      border: 1px solid white;
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
