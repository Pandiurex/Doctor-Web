import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {

seleccionado = '';

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

  sintomas = ['sintoma1', 'sintoma2', 'sintoma3', 'sintoma4', 'sintoma5', 'sintoma6', 'sintoma7'
    , 'sintoma8', 'sintoma9', 'sintoma10'];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('ngForm: ', forma);
    console.log('Valor forma: ', forma.value);
  }

}
