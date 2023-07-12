import { Component } from '@angular/core';
import { Candidato } from 'src/app/Candidato';
import { CandidatoService } from 'src/app/services/candidato.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent {
  type = "number"
  label = "Código"
  placeholder = "Digite o código do candidato..."
  errorMessage = "O código é obrigatório!"
  field = "codCandidato"

  constructor(
    private candidatoService: CandidatoService,
    private messageService: MessagesService
  ) {}

  async createHandler(candidato: Candidato) {

    await this.candidatoService.schedule(candidato).subscribe({
      next: (candidato) => {
        this.messageService.add("Entrevista marcada com sucesso!");
      },
      error: (error) => {
        this.messageService.add("Erro ao buscar código do candidato! Verifique as informações e tente novamente.");
      },
    });
  }
}
