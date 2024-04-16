import { Component, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'gpt-prompt-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" (keydown.enter)="onSubmit($event)" class="d-flex flex-row ">
      <div class="d-flex align-items-center input-box" [class.focused]="isInputFocused">
        <!-- <input type="text" formControlName="inputPrompt" (focus)="isInputFocused = true" (blur)="isInputFocused = false"> -->
        
        <textarea cols="30" rows="2" 
          formControlName="inputPrompt" 
          (focus)="isInputFocused = true" 
          (blur)="isInputFocused = false">
        </textarea>
        <button type="submit">
          <div class="d-flex justify-content-center align-items-center">
            <img src="assets/icons/submit.png" alt="submit prompt">
          </div>
        </button>
      </div>
    </form>
  `,
  styles: [`

    @import '../../styles/colors.scss';

    :host {
      width: 80%;
    }

    textarea {
      border: none;
      outline: none;
      scrollbar-width: none;
      resize: none;
      flex-grow: 1;
      
      padding: 8px 6px;
      background: $bg-dark;
      color: #fff;

      font-size: 14px;
      height: auto;
    }

    textarea:focus-visible {
      outline: none; 
    }

    button {
      border: 0;
      background: none;
    }

    .input-box {
      width: 100%;
      border: 1px solid #323232;
      border-radius: 8px;
      padding: 0 4px;
    }

    .focused {
      border: 1px solid #525252;
    }

    img {
      width: 24px;
      height: 24px;
    }



  `]
})
export class PromptFormComponent {

  form: FormGroup;
  response = "";
  isInputFocused = false;


  constructor(
    private gptService: GptService,
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {
    this.form = this.formBuilder.group({
      inputPrompt: ['', [Validators.required, this.sharedService.noWhiteSpaceValidator]]
    });
  }

  onSubmit(event?: Event) {
    if(event)
      event.preventDefault();

    if (this.form.valid) {
      let formControl = this.form.get('inputPrompt');

      if(formControl) {
        const inputPrompt = formControl.value.trim();
        this.gptService.getGptResponse(inputPrompt);
        formControl.setValue("");
      }
    }
  }

}
