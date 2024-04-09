import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor(private http: HttpClient) { }

  invokeGpt(prompt: string) {
    let url = "http://localhost:8080/api/test?prompt=" + prompt;
    this.http.get(url)
      .subscribe(response => {
        console.log(response);
      })
  }
  
}
