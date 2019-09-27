import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-sintomas',
  templateUrl: './modificar-sintomas.component.html',
  styleUrls: ['./modificar-sintomas.component.css']
})
export class ModificarSintomasComponent implements OnInit {

  modify: FormGroup;

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

  public compuestos = [
    { value: 'id1', name: 'Gripe' },
    { value: 'id2', name: 'Mucosidad' },
    { value: 'id3', name: 'Dificultad ir al baño' }
  ];
  
  constructor() {
    this.modify = new FormGroup({
      // id: new FormControl(),
      nombre: new FormControl('', Validators.required),
      keyword: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      compuesto: new FormControl('', Validators.required),
      componentes: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
