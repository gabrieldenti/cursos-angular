import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item! : Item
  @Output() itemEditar = new EventEmitter();
  @Output() itemDeletar = new EventEmitter();
 


  faPen = faPen;
  faTrash = faTrash

  constructor(private servicoLista: ListaDeCompraService) { }


  ngOnChanges(changes: SimpleChanges): void { //Onchanges -> é um gancho de ciclo de vida (lifecycle hook) do Angular que é executado sempre que uma ou mais propriedades de entrada (vinculadas com @Input()) sofrem alterações.
    
  }

  ngOnInit(): void { }

  comprarItem(){
    if(this.item.comprado == true){
      this.item.comprado = false
    }else{
      this.item.comprado = true;
    }
  }

  editarItem(){
    this.itemEditar.emit(this.item);
  }

  deletarItem(){
    this.itemDeletar.emit(this.item.id);
  }

}
