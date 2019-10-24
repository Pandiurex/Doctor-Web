import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PadecimientoService } from '../padecimientos.service';
import { SintomasService } from '../../sintomas/sintomas.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-padecimientos',
  templateUrl: './agregar-padecimientos.component.html',
  styleUrls: ['./agregar-padecimientos.component.css'],
  providers: [SintomasService, PadecimientoService]
})
export class AgregarPadecimientosComponent implements OnInit {

  padecimiento: FormGroup;
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

  public sintomas : any = [];
  public selectedSints : any = [];

  selectedFile : File = null;
  formData: any = new FormData();
  
  constructor(private padServ : PadecimientoService, private sintServ : SintomasService, private toast : ToastrService, private router : Router) {
    this.padecimiento = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      sintomas: new FormControl(''),
      imagen : new FormControl(''),
      sintomasSeleccionados : new FormControl('')
    });
  }

  ngOnInit() {
    this.sintServ.getSints().subscribe( (res: any) =>{
      this.sintomas = res.body;
    },
  error =>{
      console.log(error);
  })
  }

  createFormData(event){
    this.selectedFile = <File>event.target.files[0];
    this.formData.append('image', this.selectedFile, this.selectedFile.name);
    console.log(this.formData.get('image'));
  }

  seleccionSintomas(){
    var id = this.padecimiento.value.sintomas;

    console.log(id);

    let item = this.sintomas.find(s => s.idSint == id );

    console.log(item);

    this.selectedSints.push(item);

    this.sintomas = this.sintomas.filter(function(value,index, arr){
      return value != item;
    });
  }

  isAlreadySelected(elemento : any){
    
    this.selectedSints.forEach(element => {
      if(elemento == element.idSint){
        return true;
      }
    });
    return false;
  }

  quitarSintomas(){
    var id = this.padecimiento.value.sintomasSeleccionados;

    console.log(id);

    let item = this.selectedSints.find(s => s.idSint == id );

    console.log(item);

    this.selectedSints = this.selectedSints.filter(function(value,index, arr){
      return value != item;
    });

    this.sintomas.push(item);
    console.log(this.selectedSints);

  }

  guardar(){
    var idsOnly : any = [];
     
    this.selectedSints.forEach(element => {
      idsOnly.push(element.idSint);
    });

      this.formData.append('nombre_pad',this.padecimiento.value.nombre);
      this.formData.append('categoria', this.padecimiento.value.categoria);
      this.formData.append('descripcion', this.padecimiento.value.descripcion);
      this.formData.append('sintomas', idsOnly);
  
    console.log(JSON.stringify(this.formData));
    
    this.padServ.createPadecimiento(this.formData).subscribe(res =>{
      console.log("Ok", res)
      this.toast.success('Se ha registrado el padecimiento con éxito!', 'Registro Exitoso!');
    this.router.navigate(['/padecimientos'])
  }, error =>{
      console.log("Error", error.error);
      this.toast.error(error.error, 'Error');
  })
  }
}
