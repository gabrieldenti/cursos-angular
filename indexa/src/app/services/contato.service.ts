import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { //httpclient para acessar os metodos http

  }
 

  ObterContatos(): Observable<Contato[]> { //ele permite que os dados sejam observados por observadores e pra isso ele tem que se inscrever(subscribe)
   return this.http.get<Contato[]>(this.API);
  }

  AdicionarContato(contato: Contato): Observable<Contato>{
    return this.http.post<Contato>(this.API, contato);
  }

  BuscarPorId(id: Number): Observable<Contato>{
    const url = `${this.API}/${id}`
    return this.http.get<Contato>(url);
  }

  ExlcuirContato(id: Number): Observable<Contato>{
    const url = `${this.API}/${id}`
    return this.http.delete<Contato>(url);
  }

  EditarContato(contato: Contato): Observable<Contato>{
    const url = `${this.API}/${contato.id}`;
    return this.http.put<Contato>(url, contato);
  }

  EditarOuAdicionarContato(contato: Contato): Observable<Contato>{
    if(contato.id){
      return this.EditarContato(contato)
    }else{
      return this.AdicionarContato(contato);
    }
  }
}
