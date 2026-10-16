import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../services/consulta-cep.service";
import { CadastroEndereco } from "./models/cadastro-endereco";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService,
  ) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl("/sucesso");
      console.log("Formulário enviado" + form.controls);
    } else {
      alert("Formulário inválido");
    }
  }

  consultaCep(ev: any, f: NgForm) {
    const cep = ev.target.value;
    if (cep !== "") {
      this.consultaCepService
        .getConsultaCep(cep)
        .subscribe((dado: CadastroEndereco) => {
          this.preenchendoEndereco(dado, f);
          console.log(dado);
        });
    }
  }

  preenchendoEndereco(dados: CadastroEndereco, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
}
