import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoService } from '../../services/contato.service';
import { MensagemErroComponent } from "../../componentes/mensagem-erro/mensagem-erro.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    NgClass,
    MensagemErroComponent,
    CabecalhoComponent
],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {

  contatoForm!: FormGroup; // FormGroup é uma classe do Angular que representa um grupo de controles de formulário. Ele é usado para agrupar controles de formulário relacionados e gerenciar seu estado e validação.

  constructor(private contatoService: ContatoService, private router: Router, private activatedRoute: ActivatedRoute) { } //injetando serviço, router é sobre rotas

  ngOnInit() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]), //[] envolve no array os validators para seja possivel add mais de um.
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
    this.carregarContato();
  }

  obterControle(nome: string): FormControl{
    const controle = this.contatoForm.get(nome)
    if(!controle){
      throw new Error('Controle de formulário não encontrado:' + nome)
    }
    return controle as FormControl
  }

  carregarContato(){
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //pega as informacoes da rota, snapshot captura as info da rota no momento que a pagina é chamada, paramap pega os parametros da rota e get e o parametro da rota que voce quer.
    this.contatoService.BuscarPorId(parseInt(id!)).subscribe((contato) => {
      this.contatoForm.patchValue(contato);
    })
  }

  salvarContato(){
    if(this.contatoForm.valid){
      const novoContato = this.contatoForm.value;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      novoContato.id = id ? parseInt(id) : null;

      this.contatoService.EditarOuAdicionarContato(novoContato).subscribe( () => {
        this.contatoForm.reset();
        this.router.navigateByUrl("/lista-contatos"); //redireciona para /lista-contatos
      });
    }
  }

  selecionarArquivo(evento: any){
    const file: File = evento.target.files[0]
    if(file){
      this.lerArquivo(file)
    }
  }

  lerArquivo(arquivo: File){
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.result){
        this.contatoForm.get('avatar')?.setValue(reader.result)
      }
    }
    reader.readAsDataURL(arquivo) //converte para base64
  }

  cancelar(){
    this.contatoForm.reset();
    this.router.navigateByUrl("/lista-contatos");
  }
}
