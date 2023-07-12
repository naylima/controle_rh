import { Component } from '@angular/core';
import { Candidato } from 'src/app/Candidato';
import { CandidatoService } from 'src/app/services/candidato.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  type = "text"
  label = "Nome"
  placeholder = "Digite o nome do candidato..."
  errorMessage = "O nome é obrigatório!"
  field = "nome"

  constructor(
    private candidatoService: CandidatoService,
    private messageService: MessagesService
  ) {}

  async createHandler(candidato: Candidato) {

    await this.candidatoService.register(candidato).subscribe(
      (id) => {
        this.messageService.add(`Candidato cadastrado com sucesso com o id ${id}`);
      },
      (error) => {
        this.messageService.add("Erro ao realizar cadastro! Verifique o nome do candidato.");
      }
    );
  }
}
