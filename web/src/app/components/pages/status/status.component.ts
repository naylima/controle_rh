import { Component } from '@angular/core';
import { Candidato } from 'src/app/Candidato';
import { CandidatoService } from 'src/app/services/candidato.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
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
    await this.candidatoService.getStatus(candidato).subscribe({
      next: (candidato) => {
        this.messageService.add(`O status do candidato é ${candidato.status}`);
      },
      error: (error) => {
        this.messageService.add("Erro ao buscar código do candidato! Verifique as informações e tente novamente.");
      },
    });  
  }
}
