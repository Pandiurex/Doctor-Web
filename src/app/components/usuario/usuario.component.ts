import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService],
})
export class UsuarioComponent implements OnInit {
  
  private users : Usuario[] = [];
  private doctors : Usuario[] = [];
  private patients : Usuario[] = [];
  constructor(private userServ : UsuarioService, private http : HttpClient) { }

  ngOnInit() {
    document.getElementById("defaultOpen").click();
    this.userServ.getUsers().subscribe( (res: any) =>{
      this.users = res.body;
      for(let i =0;i<this.users.length;i++){
        if(this.users[i].tipoUsuario == 2){
        this.doctors.push(this.users[i]);
        }
        else if(this.users[i].tipoUsuario == 1){
          this.patients.push(this.users[i]);
        }
      }
      if(this.doctors.length!=0){
        console.log("Ok");
      }
    },
  error =>{
      console.log(error);
  })
  }

  changeTab(tipo : any){
        var i, tabcontent, links, active;
    
        tabcontent = document.getElementsByClassName("tabcontent");
        console.log(tabcontent);
        for (i = 0; i< tabcontent.length; i++){
            tabcontent[i].style.display = "none";
        }
    
        links = document.getElementsByClassName("tablinks");
        for (i = 0; i < links.length; i++){
            links[i].className = links[i].className.replace(" active", "");
        }
    
        document.getElementById(tipo).style.display = "block";
        active = document.getElementsByName(tipo);
        active[0].className += " active";
  }

}
