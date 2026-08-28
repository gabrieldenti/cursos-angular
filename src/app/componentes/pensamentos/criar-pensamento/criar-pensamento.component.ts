import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  pensamento = {
    id: '1',
    conteudo: 'input',
    autoria: 'dev',
    modelo: ''

  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

  criarPensamento(){

  }

  cancelarPensamento(){
    
  }
}
