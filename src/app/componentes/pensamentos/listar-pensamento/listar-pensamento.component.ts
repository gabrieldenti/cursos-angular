import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  pagina: number = 1;
  haMaisPensamentos: boolean = true;

  filtro: string = '';

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.listarPensamento(this.pagina).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  } // ngOnInit: ciclo de vida do componente, é chamado quando o componente é inicializado. 

  carregarMaisPensamentos(){
    this.pensamentoService.listarPensamento(++this.pagina, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.pagina = 1;

    this.pensamentoService.listarPensamento(this.pagina, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  listarFavoritos(){
    this.haMaisPensamentos = true
    this.pagina = 1;

    this.pensamentoService.listarPensamentoFavoritos(this.pagina, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })

  }

  listarPensamentos(){
    this.pensamentoService.listarPensamento(this.pagina).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }
}
