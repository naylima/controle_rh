import { Component, OnInit } from '@angular/core';
import { CandidatoService } from 'src/app/services/candidato.service';

@Component({
  selector: 'app-aprovados',
  templateUrl: './aprovados.component.html',
  styleUrls: ['./aprovados.component.css']
})
export class AprovadosComponent implements OnInit{
  aprovados: string[] = []

  constructor(
    private candidatoService: CandidatoService,
  ) {}

  ngOnInit(): void {
    this.candidatoService.getApproved().subscribe(
      (data) => {
        this.aprovados = data;
      }
    );
  }
}
