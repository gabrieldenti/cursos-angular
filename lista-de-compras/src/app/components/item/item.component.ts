import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item! : Item
  @Output() itemEditar = new EventEmitter();
  @Output() itemDeletar = new EventEmitter();
 


  faPen = faPen;
  faTrash = faTrash

  constructor() { }


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

  ngOnDestroy(){ //ondestroy limpa os elementos e dados da sua aplicação, destroi os componentes liberando memoria na aplicação.

                  //O Memory Leak é um tipo de vazamento de recurso causado pelo mal gerenciamento da alocação de memória,
                  //em que a memória não é limpa quando não é mais necessária, podendo causar mal funcionamento da aplicação como travamentos, 
                  // lentidão e até o encerramento da aplicação.

  }

}
