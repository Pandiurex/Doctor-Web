import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Usuario } from '../../interfaces/usuario.interface';

import paginate = require('jw-paginate');
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService],
})
export class UsuarioComponent implements OnInit {
  @Input() items : Array<any>
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 200;
  paginado: any = {};
  itemsPagina: Array<any>;

  private users : Usuario[] = [];
  private doctors : Usuario[] = [];
  private patients : Usuario[] = [];
  constructor(private userServ : UsuarioService, private http : HttpClient) { }

  ngOnInit() {
    document.getElementById("defaultOpen").click();
    this.userServ.getUsers().subscribe( (res: any) =>{

      for(let i =0;i<res.body.length;i++){
        if(res.body[i].tipoUsuario == 2){
        this.doctors.push(res.body[i]);
        }
        else if(res.body[i].tipoUsuario == 1){
          this.patients.push(res.body[i]);
        }
      }
      if(this.doctors.length!=0){
        
        console.log("Ok");
      }
      this.users = this.doctors;
      this.setPage(this.initialPage);
    },
  error =>{
      console.log(error);
  })
  }

  changeTab(tipo : any){
        var i, tabcontent, links, active;
    
        if(tipo=="Paciente"){
          this.users=this.patients;
          this.setPage(this.initialPage);
        }else{
          this.users=this.doctors;
          this.setPage(this.initialPage);
        }

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(pagina : number){
    console.log(this.users)
    this.paginado = paginate(this.users.length,pagina, this.pageSize, this.maxPages);

    this.itemsPagina = this.users.slice(this.paginado.startIndex, this.paginado.endIndex + 1);

    this.changePage.emit(this.itemsPagina);
  }

}
