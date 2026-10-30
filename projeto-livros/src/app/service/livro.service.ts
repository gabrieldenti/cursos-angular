import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

private readonly URL_API = 'https://www.googleapis.com/books/v1/volumes'

  constructor(private http: HttpClient) { }


  buscarLivros(valorDigitado: string): Observable<LivrosResultado>{ //observable -> emite uma colecao de valores e eventos futuros
    const params = new HttpParams().append('q', valorDigitado);

    return this.http.get<LivrosResultado>(this.URL_API, {params})
    // .pipe( 
    //   tap(result => console.log(result)), //tap é usado para debug, sem modificar o fluxo. 
    //   map(resultado => (resultado.items)) //Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado.

    // )
  }
}

//pipe é usado para encadear operadores do rxjs que transformam, filtram ou manipulam fluxos de dados de um Observable de forma modular e declarativa
