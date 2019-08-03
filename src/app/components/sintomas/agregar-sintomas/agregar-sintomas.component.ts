import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-sintomas',
  templateUrl: './agregar-sintomas.component.html',
  styleUrls: ['./agregar-sintomas.component.css']
})
export class AgregarSintomasComponent implements OnInit {

  sintomas: FormGroup;

  categorias = [
    {
      nombre: 'Estomacal',
      abreviacion: 'EST',
      id: '1'
    },
    {
      nombre: 'Respiratorio',
      abreviacion: 'RES',
      id: '2'
    },
    {
      nombre: 'Neurologico',
      abreviacion: 'EST',
      id: '3'
    }
  ];

  constructor() {
    this.sintomas = new FormGroup({
      // id: new FormControl(),
      nombre: new FormControl('', Validators.required),
      keyword: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descripcion: new FormControl('')
    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.sintomas.value);
  }

}
