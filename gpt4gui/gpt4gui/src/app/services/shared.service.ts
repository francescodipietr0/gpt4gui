import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { GptResponseGetDTO } from '../dtos/dtos';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  noWhiteSpaceValidator(control: AbstractControl) {
    if (control.value && control.value.trim() === '') {
      return { 'required': true };
    }
    return null;
  }
  
}
