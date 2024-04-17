import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { GptResponseGetDTO } from '../dtos/dtos';
import { Message } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  private messageSubject = new BehaviorSubject<Message | undefined>(undefined);
  public message$: Observable<Message | undefined> = this.messageSubject.asObservable();

  constructor(private http: HttpClient) { }

  getGptResponse(prompt: string): void {
    let url = "http://localhost:8080/api/test?prompt=" + prompt;
    this.http.get(url)
      .pipe(
        map(response => this.mapToGptResponseDTO(response))
      )
      .subscribe(response => {
        this.messageSubject.next({question: prompt, answer: response});
      });
  }

  mapToGptResponseDTO(data: any){
    return {
      id: data.id,
      created: data.created,
      // al momemento non vi è la gestione delle scelte;
      // è stato creato un ChoiceDTO in modo che, in eventuali sviluppi futuri, sarà più facile poter gestire un array di choices
      choices: {
        message: {
          role: data.choices[0].message.role,
          content: data.choices[0].message.content,
        },
        logprobs: data.choices[0].logprobs,
      },
      usage: {
          prompt_tokens: data.usage.prompt_tokens,
          completion_tokens: data.usage.completion_tokens,
          total_tokens: data.usage.total_tokens
      }
    }
  }

  /** TODO:
    Il codice sembra abbastanza pulito e funzionale. Tuttavia, ci sono alcune cose che potrebbero essere migliorate o considerate:

    Gestione degli errori: Attualmente non stai gestendo gli errori nella tua chiamata HTTP. È una buona pratica gestire gli errori e notificarli al codice chiamante, ad esempio emettendo un errore sul tuo BehaviorSubject o gestendo l'errore nel chiamante della funzione invokeGpt().

    Trasformazione della risposta: Attualmente stai trasformando la risposta in una stringa utilizzando JSON.stringify(). Questo può essere appropriato a seconda delle esigenze dell'applicazione, ma potresti voler considerare di mantenere la risposta come oggetto JSON nel caso in cui il chiamante desideri elaborare ulteriormente i dati.

    Gestione delle sottoscrizioni: Assicurati di gestire correttamente le sottoscrizioni per evitare memory leaks. Ad esempio, potresti voler disporre della sottoscrizione al BehaviorSubject quando il servizio viene distrutto.

    Sicurezza: Assicurati che il tuo servizio di backend sia configurato in modo sicuro, soprattutto quando si gestiscono dati sensibili o si effettuano chiamate HTTP da un'applicazione client. Assicurati di adottare buone pratiche di sicurezza per proteggere la tua applicazione.

    Documentazione: Assicurati di documentare adeguatamente il tuo codice, soprattutto se è destinato ad essere utilizzato da altri sviluppatori. Questo include documentare le funzioni pubbliche, le dipendenze esterne e le eventuali limitazioni o considerazioni di utilizzo.

    In generale, il tuo codice sembra essere un buon punto di partenza, ma assicurati di considerare anche questi aspetti per garantire che il tuo servizio sia robusto, sicuro e facilmente utilizzabile.
   */
  
}
