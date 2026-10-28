import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca: string = ''
  subscription: Subscription //representa a assinatura do observable 

  constructor(private service: LivroService) { }


  buscarLivros(){
    this.subscription = this.service.buscarLivros(this.campoBusca).subscribe({
     next: livro => console.log(livro), //next -> quando se tem sucesso na chegada dos dados e pode ser emitido varias vezes. 
     error: erro => console.error(erro), //error -> mostra o erro e, encerra o ciclo de vida do observable se houver um erro, e opcinal declarar o error.
     complete: () => console.log('Observable completado') //complete -> encerra o ciclo de vida do observable e é opcinal declarar o complete.
      
    }) //observer colecao de callback, ouve a colecao de valores do observable 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); //é utilizado para liberar recursos e cancelar a execução do observable
  }

}



