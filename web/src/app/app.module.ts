import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { EntrevistaComponent } from './components/pages/entrevista/entrevista.component';
import { DesqualificacaoComponent } from './components/pages/desqualificacao/desqualificacao.component';
import { StatusComponent } from './components/pages/status/status.component';
import { AprovacaoComponent } from './components/pages/aprovacao/aprovacao.component';
import { AprovadosComponent } from './components/pages/aprovados/aprovados.component';
import { FormComponent } from './components/form/form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    CadastroComponent,
    EntrevistaComponent,
    DesqualificacaoComponent,
    StatusComponent,
    AprovacaoComponent,
    AprovadosComponent,
    FormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
