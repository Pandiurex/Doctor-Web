import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErrorMsg } from '../../../interfaces/errorMsg.const';
import { ProfileService } from '../profile.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  providers: [ProfileService]
})
export class ProfileInfoComponent implements OnInit {

  @Input() usuarioInfo: any;
  mensajes_error = ErrorMsg.ERROR_MSG_REGISTER;
  formData: any = new FormData();
  datos_perfil : FormGroup;
  constructor(private profileServ : ProfileService, private toast : ToastrService, private router : Router) {
    this.datos_perfil = new FormGroup({
      nombres : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      apellidos : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      nickname : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])
    })
   }

  ngOnInit() {
    this.datos_perfil.controls['nickname'].setValue(this.usuarioInfo.nickname, {onlySelf : true});
    this.datos_perfil.controls['nombres'].setValue(this.usuarioInfo.nombres, {onlySelf : true});
    this.datos_perfil.controls['apellidos'].setValue(this.usuarioInfo.apellidos, {onlySelf : true});
  }

  actualizarDatos(){
    console.log(this.datos_perfil.value);
    this.formData.append('nickname', this.datos_perfil.value.nickname);
    this.formData.append('nombres', this.datos_perfil.value.nombres);
    this.formData.append('apellidos', this.datos_perfil.value.apellidos);
        this.profileServ.updateUser(this.usuarioInfo.id, this.formData).subscribe( (res: any) =>{
          this.toast.success('Datos Modificados con éxito', 'Modificación Exitosa!');
          this.formData = new FormData();
        },
      error =>{
        console.log(error.message);
          this.toast.error(error.error.message,'Error');
          this.formData = new FormData();
      })
    
  }
}
