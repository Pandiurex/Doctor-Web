import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoMedicComponent } from './info-medic/info-medic.component';
@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css'],
  providers: [UsuarioService]
})
export class MedicsComponent implements OnInit {

  medicos : any[] = [];
  pagina = 0;
  public historiales : any[] = [];
  key :string = 'padecimiento_final';
  reversa : boolean = false;
  myFilter;
  constructor(private userServ : UsuarioService, private modalService : NgbModal) { }

  ngOnInit() {
    this.userServ.getDoctors().subscribe((res: any) =>{

      this.medicos = res.body;

    });
  }

  especializaciones(info: any[]){
    let especializacionesString ="";
    if(info.length==0){
      return "";
    }else{
      info.forEach(especializacion => {
        especializacionesString = especializacionesString + especializacion.nombre_esp + ",";
      });
      especializacionesString = especializacionesString.substring(0,especializacionesString.length-1);
      return especializacionesString;
    }
  }

  openModal(info, hash : any){
    const modalRef = this.modalService.open(InfoMedicComponent, { windowClass : "myCustomModalClass"});
    modalRef.componentInstance.hash_doctor = hash;
  }

  filtering(){
    this.pagina=1;
  }
}
