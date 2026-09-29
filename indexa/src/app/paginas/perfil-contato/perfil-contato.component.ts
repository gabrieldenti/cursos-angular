import { Component, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    SeparadorComponent,
    CabecalhoComponent,
    RouterLink
],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})


export class PerfilContatoComponent implements OnInit{
  contato: Contato = {
    id: 0,
    avatar: '',
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }


  constructor(private activatedRoute: ActivatedRoute, private contatoService: ContatoService, private router: Router){} //injetando servico que possibilita pegar informacoes da rota 

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //pega as informacoes da rota, snapshot captura as info da rota no momento que a pagina é chamada, paramap pega os parametros da rota e get e o parametro da rota que voce quer.
    this.contatoService.BuscarPorId(parseInt(id!)).subscribe((contato) => {
      this.contato = contato
    })
  }

  ExcluirContato(){
    this.contatoService.ExlcuirContato(this.contato.id).subscribe(() => {
      this.router.navigateByUrl('/lista-contatos');
    })
  }


}
