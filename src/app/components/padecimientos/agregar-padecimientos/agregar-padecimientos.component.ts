import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-padecimientos',
  templateUrl: './agregar-padecimientos.component.html',
  styleUrls: ['./agregar-padecimientos.component.css']
})
export class AgregarPadecimientosComponent implements OnInit {

  padecimiento: FormGroup;

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
    this.padecimiento = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      sintomas: new FormControl('')
    });
  }

  ngOnInit() {
  }
}
