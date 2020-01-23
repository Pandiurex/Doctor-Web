import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoMedicalRecordComponent } from './info-medical-record/info-medical-record.component';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css'],
  providers: [ProfileService]
})
export class MedicalRecordComponent implements OnInit {

  id = sessionStorage.getItem('usuario');
  pagina = 0;
  public historiales : any[] = [];
  key :string = 'padecimiento_final';
  reversa : boolean = false;
  myFilter;
  content;
  constructor(private profileServ : ProfileService, private modalService : NgbModal) { }

  ngOnInit() {
    //console.log(this.id);
    this.profileServ.historyList(this.id).subscribe( (res: any) =>{
      this.historiales = res.body;
      console.log(this.historiales);
    },
  error =>{
      console.log(error);
  })
  }

  filtering(){
    this.pagina=1;
  }

  sorting(key : any){
    this.key = key;
    this.reversa = !this.reversa;
  }

  openModal(info, hist : any){
    const modalRef = this.modalService.open(InfoMedicalRecordComponent, { windowClass : "myCustomModalClass"});
    modalRef.componentInstance.historial = hist;
  }

}
