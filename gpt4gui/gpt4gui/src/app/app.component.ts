import { Component } from '@angular/core';
import { GptService } from './services/gpt.service';

@Component({
  selector: 'gpt-root',
  template: `
    <div class="container-fluid">
      <div class="row full-height">
        <div class="col col-2">

        </div>
        <div class="col col-8 d-flex flex-column justify-content-between pt-4 pb-3">
          <gpt-response-box></gpt-response-box>
          <gpt-prompt-form></gpt-prompt-form>
        </div>
        <div class="col col-2">

        </div>
      </div>
    </div>
  `,
  styles: [`

    @import '../styles/colors.scss';

    .container-fluid, .row {
      height: 100%;
    }

    .col {
      height: 100%;
    }

    .col:nth-of-type(2) {
      background: $bg-dark;
    }

  `]
})
export class AppComponent {

  title = 'gpt4gui';

  constructor() {}

}
