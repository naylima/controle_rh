import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { EntrevistaComponent } from './components/pages/entrevista/entrevista.component';
import { DesqualificacaoComponent } from './components/pages/desqualificacao/desqualificacao.component';
import { StatusComponent } from './components/pages/status/status.component';
import { AprovacaoComponent } from './components/pages/aprovacao/aprovacao.component';
import { AprovadosComponent } from './components/pages/aprovados/aprovados.component';

const routes: Routes = [
  {path:"cadastrar", component: CadastroComponent},
  {path: "marcarentrevista", component: EntrevistaComponent},
  {path: "desqualificar", component: DesqualificacaoComponent},
  {path: "verificarstatus", component: StatusComponent},
  {path: "aprovar", component: AprovacaoComponent},
  {path: "aprovados", component: AprovadosComponent},
  {path: '**', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
