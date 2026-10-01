import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaiorIdade]',
  providers: [{
    provide: NG_VALIDATORS, //-> token que permite add novas diretivas a uma colecao de diretivas validadoras 
    useExisting: MaiorIdadeDirective, //-> classe que reoresenta a diretiva 
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const AnoNascimento = new Date(dataNascimento).getFullYear();
    const AnoAtual = new Date().getFullYear();
    const anoNascimentoMais18 = AnoNascimento + 18;

    const maiorIdade = anoNascimentoMais18 <= AnoAtual;
    return maiorIdade ? null : { maiorIdade: true };

  }

}
