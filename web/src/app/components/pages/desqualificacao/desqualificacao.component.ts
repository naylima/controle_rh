import { Component } from '@angular/core';
import { Candidato } from 'src/app/Candidato';
import { CandidatoService } from 'src/app/services/candidato.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-desqualificacao',
  templateUrl: './desqualificacao.component.html',
  styleUrls: ['./desqualificacao.component.css']
})
export class DesqualificacaoComponent {
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

    await this.candidatoService.disqualify(candidato).subscribe({
      next: () => {
        this.messageService.add("Candidato desqualificado com sucesso!")
      },
      error: (error) => {
        this.messageService.add("Erro ao buscar código do candidato! Verifique as informações e tente novamente.");
      },
    });
  }
}
