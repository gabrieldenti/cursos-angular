import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Subscription, switchMap, tap, throwError } from 'rxjs';
import { Item, Livro, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent /* implements OnDestroy */ {

  listaLivros: Livro[] = [];
  campoBusca = new FormControl
  mensagemErro: string  = '';
  livrosResultado: LivrosResultado;
  // subscription: Subscription //representa a assinatura do observable 
  // livro: Livro
  

  // O AsyncPipe se inscreve automaticamente em Observables ou lida com Promises e renderiza o valor mais recente emitido e 
  // lida automaticamente com o cancelamento da inscrição (unsubscribe) 
  // quando o componente é destruído, evitando vazamentos de memória (memory leaks).

  constructor(private service: LivroService) { }


  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(//$ -> representa uma variavel que é um observable ou recebe um. 
    debounceTime(300), //cria um delay baseado no tempo(param)
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(), //é um operador de filtragem do RxJS que só deixa passar um valor se ele for diferente do valor imediatamente anterior emitido pelo fluxo (Observable).
    switchMap((valorDigitado) =>  this.service.buscarLivros(valorDigitado)), // switchmap -> parecido com o map, 
    // mas ele cancela as chaamadas anteriores e so passa pro servidor a ultima chamada.
    tap(resultado => this.livrosResultado = resultado),
    map(resultado => resultado.items ?? []),
    map(items => this.listaLivros = this.livrosResultadoParaLivros(items)),
    catchError(erro => { //captura o erro dos observables
      console.log(erro)
      return throwError(() => new Error(this.mensagemErro = 'Ocorreu um erro')); //emite o erro com um observable
    })
  )

//metodo não usado

  // buscarLivros(){
  //   this.subscription = this.service.buscarLivros(this.campoBusca).subscribe({
  //    next: items => {
  //     this.listaLivros = this.livrosResultadoParaLivros(items)
  //    }, //next -> quando se tem sucesso na chegada dos dados e pode ser emitido varias vezes. 
  //    error: erro => console.error(erro), //error -> mostra o erro e, encerra o ciclo de vida do observable se houver um erro, e opcinal declarar o error.
  //    complete: () => console.log('Observable completado') //complete -> encerra o ciclo de vida do observable e é opcinal declarar o complete.
      
  //   }) //observer colecao de callback, ouve a colecao de valores do observable 
  // }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(items => {
      return new LivroVolumeInfo(items)
    })
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe(); //é utilizado para liberar recursos e cancelar a execução do observable
  // }

}



