import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit {

    @Input() pensamento: Pensamento = {  //o @input permite que o componente pai passe dados para o componente filho
      id: 0,
      conteudo:'',
      autoria:'',
      modelo: ''
    }
    
  
    constructor(){
  
    }
  
    ngOnInit(): void {
      
    }
  
    larguraPensamento(): string{
      if(this.pensamento.conteudo.length > 256){
        return 'pensamento-g'
      }
      return 'pensamento-p'
    }

}
