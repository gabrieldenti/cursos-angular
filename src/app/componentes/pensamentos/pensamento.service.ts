import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ //ele sinaliza pro angular que essa classe é um serviço e que pode ser injetada em outros componentes
  providedIn: 'root' //providedIn: 'root' significa que o serviço será fornecido no nível raiz da aplicação, tornando-o disponível para todos os componentes e serviços dentro do aplicativo. Isso garante que haja apenas uma instância do serviço em toda a aplicação, promovendo a reutilização e consistência dos dados.
})
export class PensamentoService {

  private API_URL="http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) { } //injetando dependencias e serviços 

  listarPensamento(): Observable<Pensamento[]> { //Observable é um tipo de objeto que representa uma coleção de valores ou eventos futuros. Ele permite que você se inscreva para receber notificações quando novos valores estiverem disponíveis, facilitando o trabalho com dados assíncronos e fluxos de eventos. No contexto do Angular, os Observables são frequentemente usados para lidar com operações assíncronas, como chamadas HTTP, eventos de interface do usuário e streams de dados em tempo real.
    return this.http.get<Pensamento[]>(this.API_URL) //retorna uma lista de pensamentos do backend
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API_URL, pensamento) //retorna o pensamento criado do backend
  }

  excluirPensamento(id: number): Observable<Pensamento>{
    const url = `${this.API_URL}/${id}` //cria a url para o pensamento a ser excluido
    return this.http.delete<Pensamento>(url) //retorna o pensamento excluido do backend
  }
}
