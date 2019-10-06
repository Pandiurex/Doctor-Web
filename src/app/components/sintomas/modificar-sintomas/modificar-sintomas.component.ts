import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SintomasService } from '../sintomas.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sintoma } from '../../../interfaces/sintoma.interface';

@Component({
  selector: 'app-modificar-sintomas',
  templateUrl: './modificar-sintomas.component.html',
  styleUrls: ['./modificar-sintomas.component.css'],
  providers : [SintomasService]
})
export class ModificarSintomasComponent implements OnInit {

  modify: FormGroup;
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
  public sintoma : Sintoma = {} as any;
  public  isChecked : boolean;
  public composicionFront : string = "";
  public composicionBack : string = "";

  constructor(private sintServ : SintomasService, private router : Router, private toast : ToastrService, private url : ActivatedRoute) {
    this.modify = new FormGroup({
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
    console.log(encodeURIComponent(this.url.snapshot.params.hash));

    //Carga de datos principales
    this.sintServ.getSint(this.url.snapshot.params.hash).subscribe( (res : any) =>{
      console.log(res);
      this.sintoma = res.body.sintoma;

      if(this.sintoma.compuesto==true){
        for(let item of res.body.compuestos){
          this.sintoma.composicion = this.sintoma.composicion.replace(item.idSint,item.nombre_sint);
        }
      }

      console.log(this.sintoma);
      this.composicionFront = this.sintoma.composicion.replace(/,/g,'_');
      this.modify.patchValue({
        nombre : this.sintoma.nombre_sint,
        keyword : this.sintoma.keyWord,
        composite : this.composicionFront,
        descripcion : this.sintoma.descripcion,
        compuesto : this.sintoma.compuesto
      })
      this.isChecked = this.sintoma.compuesto;
      this.modify.controls['categoria'].setValue(this.sintoma.categoria_sint, {onlySelf : true});

    });

    //Carga de componentes
    this.sintServ.getComponents().subscribe(res =>{
      this.compuestos = res.body;
    })
  }

  changed(evt){
    this.isChecked = evt.target.checked;
    console.log(evt.target.checked);
  }

  modificar(){
    if(this.isChecked==false){
      this.values = new HttpParams()
      .set('nombre_sint', this.modify.value.nombre)
      .set('categoria_sint', this.modify.value.categoria)
      .set('descripcion', this.modify.value.descripcion)
      .set('keyWord', this.modify.value.keyword)
      .set('compuesto', 'false')
      .set('composicion', '')
    }else{
      this.nameToId(this.composicionFront);
      this.values = new HttpParams()
      .set('nombre_sint', this.modify.value.nombre)
      .set('categoria_sint', this.modify.value.categoria)
      .set('descripcion', this.modify.value.descripcion)
      .set('keyWord', this.modify.value.keyword)
      .set('compuesto', 'true')
      .set('composicion', this.composicionBack)
    }
    console.log(this.values);
    this.sintServ.modificar(this.sintoma.idSint,this.values).subscribe(res =>{
      console.log("Ok", res)
      this.toast.success('Se ha modificado el sintoma con éxito!', 'Registro Exitoso!');
    this.router.navigate(['/sintomas'])
  }, error =>{
      console.log("Error", error.error);
      this.toast.error(error.error, 'Error');
  })
  }

  creacionComposicion(){
    var id = this.modify.value.componentes;

    console.log(id);

    let item = this.compuestos.find(s => s.idSint == id );

    if(this.composicionFront==""){
    this.composicionFront += item.nombre_sint;
    }else{
    this.composicionFront += "_&_" + item.nombre_sint;
    }

    this.modify.patchValue({
      composite: this.composicionFront
    })
  }

  cambioContextual(){
    console.log(this.modify.value.composite)
    this.composicionFront = this.modify.value.composite;
    console.log(this.composicionBack);
    console.log(this.compuestos);
  }

  nameToId(componentes : string){
    let nombres = componentes.split("_");
    for(let nombre of nombres){
      console.log(nombre);
      let item = this.compuestos.find(s => s.nombre_sint == nombre ) as any;
      console.log(item);
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

  isTheSame(compuesto : any){
    if(compuesto == this.sintoma.nombre_sint){
      return true;
    }
    else{
      return false;
    }
  }
}
