import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { ContatoService } from '../../services/contato.service';
import { PerfilContatoComponent } from '../perfil-contato/perfil-contato.component';
import { Contato } from '../../componentes/contato/contato';


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatoService.ObterContatos().subscribe(listaContatos => this.contatos = listaContatos); //observador tem que inscrever ele para ele pegar o que vem do obtercontatos
  }

  filtrarContatosPorTexto(): Contato[]{
    if(!this.filtroPorTexto){
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.filtroPorTexto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    })
  }

  filtrarContatosPorLetra(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => contato.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").startsWith(letra));
  }
}
