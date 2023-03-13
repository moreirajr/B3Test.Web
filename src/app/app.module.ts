import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaService } from './services/tarefa.service';
import { TarefasComponent } from './tarefas/tarefas.component'

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TarefaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
