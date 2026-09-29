import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  favoritos: boolean = false;
  titulo: string = "Meu mural";

  listaFavoritos: Pensamento[] = [];
  

  constructor(private pensamentoService: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.pensamentoService.listarPensamento(this.pagina, undefined, this.favoritos).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  } // ngOnInit: ciclo de vida do componente, é chamado quando o componente é inicializado. 

  carregarMaisPensamentos(){
    this.pensamentoService.listarPensamento(++this.pagina, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.pagina = 1;

    this.pensamentoService.listarPensamento(this.pagina, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  listarFavoritos(){
    this.titulo = "Meus Favoritos"
    this.haMaisPensamentos = true
    this.pagina = 1;
    this.favoritos = true;

    this.pensamentoService.listarPensamento(this.pagina, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
      this.listaFavoritos = listaPensamentos;
    })

  }

  listarPensamentos(){
    this.pagina = 1;
    this.filtro = '';
    this.favoritos = false;

    this.router.navigate([this.router.url])

  }
}
