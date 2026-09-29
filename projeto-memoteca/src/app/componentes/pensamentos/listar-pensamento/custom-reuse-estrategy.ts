import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

export class CustomReuseStrategy extends BaseRouteReuseStrategy {

  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean { // é responsável por determinar se a rota atual pode ser reutilizada ou não.
    return future.data['reuseComponent']; // verifica se a rota futura possui a propriedade reuseComponent definida no objeto data, se for 'true' a rota pode ser utilizada
  }
}