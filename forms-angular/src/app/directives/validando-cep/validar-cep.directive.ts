import { Directive } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { ConsultaCepService } from "src/app/services/consulta-cep.service";

@Directive({
  selector: "[appValidarCep]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidarCepDirective,
      multi: true,
    },
  ],
})
export class ValidarCepDirective implements AsyncValidator {
  constructor(private consultaCepService: ConsultaCepService) {}
  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;
    return this.consultaCepService.getConsultaCep(cep).pipe(
      map((dado: any) => {
        if (dado.erro) {
          return { cepInvalido: true };
        }
        return null;
      }),
      catchError((error) => {
        console.error("Falha ao comunicar com a API do ViaCEP", error);

        return of({ cepInvalido: true });
      }),
    );
  }
}
