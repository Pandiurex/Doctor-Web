import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SignupService } from './signup.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService, HttpClient]
})

export class SignupComponent implements OnInit {

  
  forma: FormGroup;
  
  private values : HttpParams;
  sexos = ['Hombre', 'Mujer', 'Indefinido'];


  constructor(private signupServ : SignupService, private http : HttpClient, private router : Router, private toast : ToastrService) {
    this.forma = new FormGroup({

      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      ]),
      genero: new FormControl('Indefinido', Validators.required),
      username: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      fechanacimiento: new FormControl('', Validators.required),
    });

    this.forma.controls.password2.setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    this.forma.controls.username.valueChanges
      .subscribe(data => {
        console.log(data);
      });

  }


  ngOnInit() { }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    this.values = new HttpParams()
    .set('nickname', this.forma.value.username)
    .set('email', this.forma.value.correo)
    .set('sexo', this.forma.value.genero)
    .set('nombres', this.forma.value.nombrecompleto.nombre)
    .set('apellidos', this.forma.value.nombrecompleto.apellido)
    .set('password', this.forma.value.password1)
    .set('passwordVerif', this.forma.value.password2)
    .set('tipoUsuario', '1')
    .set('fecha_nacimiento', this.forma.value.fechanacimiento);
    this.signupServ.checkRegister(this.values).subscribe(res =>{
      console.log("Ok", res)
      this.toast.success('Le hemos enviado un correo para confirmar su cuenta', 'Registro Exitoso!');
    this.router.navigate(['/home'])
  }, error =>{
      console.log("Error", error.error);
      this.toast.error(error.error, 'Error');
  })
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    const forma: any = this;
    if (control.value !== forma.controls.password1.value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

}
