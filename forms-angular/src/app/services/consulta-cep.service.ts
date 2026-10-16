import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CadastroEndereco } from "../cadastro/models/cadastro-endereco";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  URL_VIACEP = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) {}

  getConsultaCep(cep: string): Observable<CadastroEndereco> {
    return this.http.get<CadastroEndereco>(`${this.URL_VIACEP}${cep}/json/`);
  }
}
