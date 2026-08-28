import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamentos-pensamento',
  templateUrl: './pensamentos-pensamento.component.html',
  styleUrl: './pensamentos-pensamento.component.css'
})
export class PensamentosPensamentoComponent implements OnInit {


  pensamento = {
    conteudo:'',
    autoria:'',
    modelo: ''
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
