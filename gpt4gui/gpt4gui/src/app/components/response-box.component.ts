import { Component, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';
import { Observable } from 'rxjs';
import { GptResponseGetDTO } from '../dtos/dtos';

@Component({
  selector: 'gpt-response-box',
  template: `
    <div class="d-flex" [ngClass]="{'justify-content-center': !(response$ | async), 'align-items-center': !(response$ | async)}">
      
    <ng-container *ngIf="(response$ | async) as response">
      {{ response.choices.message.content }}
    </ng-container>

      <!-- welcome -->
      <ng-container *ngIf="!(response$ | async)">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="assets/icons/logo.png" alt="logo">
          <p>Ciao, come posso aiutarti?</p>
        </div>
      </ng-container>

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
export class ResponseBoxComponent implements OnInit {

  response$: Observable<GptResponseGetDTO> = this.gptService.response$;

  constructor(private gptService: GptService) { }

  ngOnInit(): void {
  }

}
