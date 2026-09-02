import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''

  }

  constructor(private pensamentoService: PensamentoService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  criarPensamento(){
    this.pensamentoService.criarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']) //navega para a rota listarPensamento, router.navigate é um método do Router que permite navegar para uma rota específica dentro da aplicação Angular. 
    }) //subscribe é um método que permite que você se inscreva em um Observable e receba notificações quando novos valores são emitidos. Ele é usado para lidar com operações assíncronas, como chamadas HTTP, eventos de usuário ou qualquer outra fonte de dados que possa emitir valores ao longo do tempo.
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }
}
