import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../../../interfaces/sintoma.interface';
@Component({
  selector: 'app-listar-sintomas',
  templateUrl: './listar-sintomas.component.html',
  styleUrls: ['./listar-sintomas.component.css']
})
export class ListarSintomasComponent implements OnInit {
  
  private sintomas : Sintoma[] = [];
  private sintoma : Sintoma = {} as any;
  constructor() { 

  }

  ngOnInit() {
    for(let i=0;i<5;i++){
      this.sintoma.idSint=i;
      this.sintoma.nombre_sint = 'placeholder'
      this.sintoma.descripcion='place';
      this.sintoma.keyWord='placeholder';
      this.sintoma.compuesto=true;
      this.sintoma.composicion='Gripa & Flemas';
      this.sintoma.categoria_sint='Nasal';

      this.sintomas.push(this.sintoma);
    }
  }

}
