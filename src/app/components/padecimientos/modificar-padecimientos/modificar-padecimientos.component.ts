import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-padecimientos',
  templateUrl: './modificar-padecimientos.component.html',
  styleUrls: ['./modificar-padecimientos.component.css']
})
export class ModificarPadecimientosComponent implements OnInit {

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

  public sintomas = [
    { value: 'id1', name: 'Gripe' },
    { value: 'id2', name: 'Mucosidad' },
    { value: 'id3', name: 'Dificultad ir al baño' }
  ];
  
  constructor() {
    this.modify = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      sintomas: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
