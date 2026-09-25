import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

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
      modelo: '',
      favorito: false
    }
    
  
    constructor(private pensamentoService: PensamentoService){
  
    }
  
    ngOnInit(): void {
      
    }
  
    larguraPensamento(): string{
      if(this.pensamento.conteudo.length > 256){
        return 'pensamento-g'
      }
      return 'pensamento-p'
    }

    atualizarFavorito(){
      this.pensamentoService.mudarFavorito(this.pensamento).subscribe(pensamento => {
        this.pensamento = pensamento;
      })
    }

}
