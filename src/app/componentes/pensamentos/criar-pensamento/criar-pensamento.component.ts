import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  formulario!: FormGroup; //formgroup é uma classe do Angular que representa um grupo de controles de formulário. Ele é usado para agrupar e gerenciar vários controles de formulário relacionados, permitindo que você valide, rastreie o estado e manipule os valores desses controles de forma mais eficiente.

  constructor(private pensamentoService: PensamentoService, private router: Router, private formBuilder: FormBuilder) { //formbuilder resumindo é uma classe do Angular que fornece uma maneira conveniente de criar instâncias de FormGroup e FormControl. Ele simplifica a criação de formulários reativos, permitindo que você defina a estrutura do formulário e seus controles de forma mais concisa e legível.

  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/(.|\s)*\S(.|\s)*/)]],
      autoria: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/(.|\s)*\S(.|\s)*/)]],
      modelo: ['', [Validators.required]]
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      this.pensamentoService.criarPensamento(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']) //navega para a rota listarPensamento, router.navigate é um método do Router que permite navegar para uma rota específica dentro da aplicação Angular. 
      }) //subscribe é um método que permite que você se inscreva em um Observable e receba notificações quando novos valores são emitidos. Ele é usado para lidar com operações assíncronas, como chamadas HTTP, eventos de usuário ou qualquer outra fonte de dados que possa emitir valores ao longo do tempo.
    }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }
}
