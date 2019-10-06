import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SintomasService } from '../sintomas.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-sintomas',
  templateUrl: './agregar-sintomas.component.html',
  styleUrls: ['./agregar-sintomas.component.css'],
  providers : [SintomasService]
})
export class AgregarSintomasComponent implements OnInit {

  sintomas: FormGroup;
  public  isChecked : boolean = false;
  private values : HttpParams;
  categorias = [
    {
      nombre: 'Estomacal'
    },
    {
      nombre: 'Respiratoria'
    },
    {
      nombre: 'Infecciosa'
    }
  ];

  public compuestos : any = [];
  public composicionFront : string = "";
  public composicionBack : string = "";

  constructor(private sintServ : SintomasService, private router : Router, private toast : ToastrService) {
    this.sintomas = new FormGroup({
      nombre: new FormControl('', Validators.required),
      keyword: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      compuesto: new FormControl(''),
      componentes: new FormControl(''),
      composite: new FormControl('')
    });
  }

  ngOnInit() {
      this.sintServ.getComponents().subscribe(res =>{
        this.compuestos = res.body;
      })
  }

  guardar() {
    console.log(this.isChecked);
    if(this.isChecked==false){
      this.values = new HttpParams()
      .set('nombre_sint', this.sintomas.value.nombre)
      .set('categoria_sint', this.sintomas.value.categoria)
      .set('descripcion', this.sintomas.value.descripcion)
      .set('keyWord', this.sintomas.value.keyword)
      .set('compuesto', 'false')
      .set('composicion', '')
    }else{
      this.nameToId(this.composicionFront);
      this.values = new HttpParams()
      .set('nombre_sint', this.sintomas.value.nombre)
      .set('categoria_sint', this.sintomas.value.categoria)
      .set('descripcion', this.sintomas.value.descripcion)
      .set('keyWord', this.sintomas.value.keyword)
      .set('compuesto', 'true')
      .set('composicion', this.composicionBack)
    }
    console.log(this.values);
    this.sintServ.createSintoma(this.values).subscribe(res =>{
      console.log("Ok", res)
      this.toast.success('Se ha registrado el sintoma con éxito!', 'Registro Exitoso!');
    this.router.navigate(['/sintomas'])
  }, error =>{
      console.log("Error", error.error);
      this.toast.error(error.error, 'Error');
  })
  }

  changed(evt){
    this.isChecked = evt.target.checked;
    console.log(evt.target.checked);
  }

  creacionComposicion(){
    var id = this.sintomas.value.componentes;

    console.log(id);

    let item = this.compuestos.find(s => s.idSint == id );

    if(this.composicionFront==""){
    this.composicionFront += item.nombre_sint;
    }else{
    this.composicionFront += "_&_" + item.nombre_sint;
    }

    this.sintomas.patchValue({
      composite: this.composicionFront
    })
  }

  cambioContextual(){
    console.log(this.sintomas.value.composite)
    this.composicionFront = this.sintomas.value.composite;
  }

  nameToId(componentes : string){
    let nombres = componentes.split("_");
    for(let nombre of nombres){
      let item = this.compuestos.find(s => s.nombre_sint == nombre )

      if(item != null){
        if(this.composicionBack==""){
          this.composicionBack += item.idSint;
          }else{
          this.composicionBack += ",&," + item.idSint;
          }
      }
    }
    console.log(this.composicionBack);
  }
}
