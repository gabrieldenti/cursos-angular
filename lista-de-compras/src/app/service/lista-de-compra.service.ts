import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItemLista(nomeItem: string){
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(itemLista: string){
    const item = this.criarItemLista(itemLista);
    this.listaDeCompra.push(item)
    this.atualizarLocalStorage()
  }

  editarItemNaLista(itemAntigo: Item, itemNomeEditar: string){
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: itemNomeEditar,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
    this.atualizarLocalStorage()
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
