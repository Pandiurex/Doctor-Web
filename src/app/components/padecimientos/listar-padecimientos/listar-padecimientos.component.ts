import { Component, OnInit } from '@angular/core';
import { Padecimiento } from '../../../interfaces/padecimiento.interface';
@Component({
  selector: 'app-listar-padecimientos',
  templateUrl: './listar-padecimientos.component.html',
  styleUrls: ['./listar-padecimientos.component.css']
})
export class ListarPadecimientosComponent implements OnInit {
  
  private padecimientos : Padecimiento[] = [];
  private padecimiento : Padecimiento = {} as any;
  constructor() { 

  }

  ngOnInit() {
    for(let i=0;i<5;i++){
      this.padecimiento.idPad=i;
      this.padecimiento.nombre_pad = 'placeholder'
      this.padecimiento.descripcion='place';
      this.padecimiento.categoria='placeholder';
      this.padecimiento.url_imagen_pad='../../../assets/default-image.jpg';
      this.padecimiento.createdAt= new Date();
      this.padecimiento.updatedAt= new Date();

      this.padecimientos.push(this.padecimiento);
    }
  }

}
