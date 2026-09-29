import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { CustomReuseStrategy } from './componentes/pensamentos/listar-pensamento/custom-reuse-estrategy';

const routes: Routes = [
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: '',
    redirectTo: '/listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent,
    data: {
      reuseComponent: true //A propriedade data é um objeto que pode ser adicionado a uma rota específica no arquivo de definição de rotas do Angular. Ele pode ser usado para armazenar metadados personalizados associados a uma rota, que podem ser usados para tomar decisões personalizadas ao navegar para uma rota específica.
    }
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  }
  
];


//routerLinkActive é necessário apenas passar a classe com o estilo que será aplicado no link

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy} //para registrar no modulo da aplicacao ,a estrategia personalizada 'CustomReuseStrategy'
  ]
})
export class AppRoutingModule { }
