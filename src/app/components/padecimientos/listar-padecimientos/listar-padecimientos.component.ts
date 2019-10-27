import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges  } from '@angular/core';
import { Padecimiento } from '../../../interfaces/padecimiento.interface';
import { PadecimientoService } from '../padecimientos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoPadecimientosComponent } from '../info-padecimientos/info-padecimientos.component';

import paginate = require('jw-paginate');
@Component({
  selector: 'app-listar-padecimientos',
  templateUrl: './listar-padecimientos.component.html',
  styleUrls: ['./listar-padecimientos.component.css'],
  providers: [PadecimientoService]
})
export class ListarPadecimientosComponent implements OnInit {
  @Input() items : Array<any>
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  paginado: any = {};
  itemsPagina: Array<any>;

  private padecimientos : Padecimiento[] = [];
  constructor(private padServ : PadecimientoService, private modalService : NgbModal) { 

  }

  ngOnInit() {
    this.padServ.getPads().subscribe( (res: any) =>{
      this.padecimientos = res.body;

      if(this.padecimientos){
        this.setPage(this.initialPage);
      }
    },
  error =>{
      console.log(error);
  })
  }

  openModal(info, pad : any){
    const modalRef = this.modalService.open(InfoPadecimientosComponent, { windowClass : "myCustomModalClass"});
    modalRef.componentInstance.pad = pad;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(pagina : number){
    this.paginado = paginate(this.padecimientos.length,pagina, this.pageSize, this.maxPages);

    this.itemsPagina = this.padecimientos.slice(this.paginado.startIndex, this.paginado.endIndex + 1);

    this.changePage.emit(this.itemsPagina);
  }
}
