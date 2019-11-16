import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef
 } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('cerrar', {static : false}) cerrar: ElementRef;
  login: FormGroup;
  private values : HttpParams;
  
  constructor(private logServ : LoginService, private http : HttpClient, private router : Router, private toast : ToastrService) { 
    
    
    this.login = new FormGroup({
            emailOrNickname: new FormControl('', Validators.required),
            logPassword: new FormControl('', Validators.required),
          });
  }

  ngOnInit() {
  }

  loginCheck(){
    console.log(this.login);
    this.values = new HttpParams()
    .set('nickOrEmail', this.login.value.emailOrNickname)
    .set('password', this.login.value.logPassword);
    this.logServ.checkLogin(this.values).subscribe( (res : any) =>{

    if(res.body.message=="Verificacion"){
      this.toast.info('Su cuenta aun no se encuentra verificada, favor de verificarla mediante su correo.', 'Cuenta sin verificar');
    }else{
    this.toast.success('Bienvenido al sistema Medic Path ' +  res.body.usuario.nickname, 'Éxito!');
    this.cerrar.nativeElement.click();
    //Pending
    //Guardar sesion de usuario
    this.router.navigate(['/home']);

    }
  }, error =>{
      console.log("Error", error.error.message);
      this.toast.error(error.error.message, 'Error');
  })
  }

  resetModal(){
    this.login.reset();
  }
}
