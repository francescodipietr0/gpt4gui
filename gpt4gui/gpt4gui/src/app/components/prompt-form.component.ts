import { Component, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gpt-prompt-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="d-flex flex-row ">
      <input type="text" formControlName="inputPrompt">
      <button type="submit">Send</button>
    </form>
  `,
  styles: [`

  `]
})
export class PromptFormComponent {

  form: FormGroup;
  response = "";


  constructor(
    private gptService: GptService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      inputPrompt: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formControl = this.form.get('inputPrompt');

      if(formControl) {
        const inputPrompt = formControl.value;
        this.gptService.invokeGpt(inputPrompt);
      }
    }
  }

}
