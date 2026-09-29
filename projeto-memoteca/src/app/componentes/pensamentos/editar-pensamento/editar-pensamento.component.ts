import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit {


  formulario!: FormGroup;

  constructor(private pensamentoService: PensamentoService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pensamentoService.buscarPensamentoPorId(Number(id)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, [Validators.required, Validators.minLength(3), Validators.pattern(/(.|\s)*\S(.|\s)*/)]],
        autoria: [pensamento.autoria, [Validators.required, Validators.minLength(3), Validators.pattern(/(.|\s)*\S(.|\s)*/)]],
        modelo: [pensamento.modelo, [Validators.required]],
        favorito: [pensamento.favorito]
      })
    })
  }

  editarPensamento(){
    this.pensamentoService.editarPensamento(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
      
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
