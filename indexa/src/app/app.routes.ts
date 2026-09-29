import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

export const routes: Routes = [
    {
        path: 'formulario-contato', component: FormularioContatoComponent //path é o caminho da rota, component é o componente que será renderizado quando a rota for acessada.
    },
    {
        path: 'lista-contatos', component: ListaContatosComponent
    },
    {
        path: '', redirectTo: '/lista-contatos', pathMatch: 'full' // redirectTo e pathMatch são usados para redirecionar a rota raiz para a rota de lista de contatos.
    },
    {
        path: 'perfil-contato/:id', component: PerfilContatoComponent //:id passa dinamicamente 
    },
    {
       path: 'formulario-contato/:id', component: FormularioContatoComponent
    }
];
