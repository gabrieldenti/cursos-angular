import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigateByUrl('/sucesso')
      console.log('Formulário enviado' + form.controls);
    }else{
      alert('Formulário inválido');
    }
  }

  consultaCep(ev: any){
    const cep = ev.target.value;
    this.consultaCepService.getConsultaCep(cep).subscribe(dado =>{
      console.log(dado);
    })
  }
}
