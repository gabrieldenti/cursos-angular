import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamentos-pensamento',
  templateUrl: './pensamentos-pensamento.component.html',
  styleUrl: './pensamentos-pensamento.component.css'
})
export class PensamentosPensamentoComponent implements OnInit {


  @Input() pensamento = {  //o @input permite que o componente pai passe dados para o componente filho
    conteudo:'sla',
    autoria:'sla',
    modelo: 'modelo1'
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
