import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  
  @Input() itemEditado!: Item;

  editando = false;
  textoBtn = 'Salvar Item';
  valorItem! : string

  constructor(private listaComprasService: ListaDeCompraService) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemEditado'].firstChange){
      this.editando = true;
      this.textoBtn = "Editar Item"
      this.valorItem = this.itemEditado?.nome;
    }
  }

  ngOnInit(): void { }


  adicionarItem(){
    this.listaComprasService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }

  editarItem(){
    this.listaComprasService.editarItemNaLista(this.itemEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar Item';
  }
}
