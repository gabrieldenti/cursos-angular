import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompras: Item[] = []
  itemEditado! : Item;
  itemDeletar!: string;

  constructor(private listaDeCompraService: ListaDeCompraService  ) { }


  ngDoCheck(): void { //Verifica quqlquer alteracao que ocorra no componente, escuta as classes filhas tambem
    this.listaDeCompraService.atualizarLocalStorage()
  }

  ngOnInit(): void {
    const lista = this.listaDeCompraService.getListaDeCompra();
    this.listaDeCompras = lista;
    console.log(this.listaDeCompras);
  }


  editarItem(item: Item){
    this.itemEditado = item;
  }

  excluirItem(itemId: string){
    this.itemDeletar = itemId;
  }

}
