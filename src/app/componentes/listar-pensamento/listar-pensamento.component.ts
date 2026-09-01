import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})



export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [{
    conteudo: 'sla',
    autoria: 'sla',
    modelo: 'modelo1'

  },

  ]


  constructor() {

  }

  ngOnInit(): void {

  }
}
