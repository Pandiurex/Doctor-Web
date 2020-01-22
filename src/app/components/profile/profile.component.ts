import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

    id = sessionStorage.getItem('usuario');
    usuario = {} as any;
    public url : string = "";

  constructor(private profileServ : ProfileService, private router : Router) {
    
   }

  ngOnInit() {
    if(sessionStorage.getItem('token')!=null){
    this.profileServ.getUser(this.id,sessionStorage.getItem('token')).subscribe( (res: any) =>{
      if(res.body.mensaje != "Token no válido"){
      this.usuario = res.body.resultado;
      sessionStorage.setItem('token',res.body.token);
      if(this.usuario.imagen_perfil!=null){
        this.url = 'data:image/jpg;base64,' + this.usuario.imagen_perfil.toString();
      }
    }else{
      sessionStorage.clear();
      localStorage.setItem('action', 'inactividad');
      this.router.navigate(['/home']);
    }
    },
  error =>{
      console.log(error);
  })
}else{
  this.router.navigate(['/home']);
}
  }

}
