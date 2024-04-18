import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PromptFormComponent } from './components/prompt-form.component';
import { MessageContainerComponent } from './components/message-container.component';
import { MessageCardItemComponent } from './components/message-card-item.component';
import { MessageCardListComponent } from './components/message-card-list.component';
import { CapitalizePipe } from './custom_pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PromptFormComponent,
    MessageContainerComponent,
    MessageCardItemComponent,
    MessageCardListComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
