import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamentos-pensamento',
  templateUrl: './pensamentos-pensamento.component.html',
  styleUrl: './pensamentos-pensamento.component.css'
})
export class PensamentosPensamentoComponent implements OnInit {


  pensamento = {
    conteudo:'sla',
    autoria:'sla',
    modelo: 'modelo1'
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
