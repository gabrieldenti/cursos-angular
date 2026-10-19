import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompras: Item[] = []
  itemEditado! : Item;

  constructor(private listaDeCompraService: ListaDeCompraService  ) { }

  ngOnInit(): void {
    const lista = this.listaDeCompraService.getListaDeCompra();
    this.listaDeCompras = lista;
  }


  editarItem(item: Item){
    this.itemEditado = item;
  }


}
