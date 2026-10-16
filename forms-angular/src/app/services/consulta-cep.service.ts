import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  URL_VIACEP = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }


  getConsultaCep(cep: string){
    return this.http.get(`${this.URL_VIACEP}${cep}/json/`);
  }
}
