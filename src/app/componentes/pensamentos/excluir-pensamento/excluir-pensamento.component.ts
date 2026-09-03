import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private pensamentoService: PensamentoService, private router: Router, private route: ActivatedRoute) { //ActivateRoute da informações sobre as rota

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') //snapshot faz uma captura do estado atual da rota e as suas infos//paramap permite acessar os parametros da rota !
    this.pensamentoService.buscarPensamentoPorId(Number(id)).subscribe((pensamento)=>{
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(){
    this.pensamentoService.excluirPensamento(Number(this.pensamento.id)).subscribe(() => {
      this.router.navigate(['/listarPensamento']);

    })
  }

  cancelarExclusao(){
    this.router.navigate(['/listarPensamento']);
  }
}
