import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../../../interfaces/sintoma.interface';
import { SintomasService } from '../sintomas.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoSintomasComponent } from '../info-sintomas/info-sintomas.component';

@Component({
  selector: 'app-listar-sintomas',
  templateUrl: './listar-sintomas.component.html',
  styleUrls: ['./listar-sintomas.component.css'],
  providers: [SintomasService],
  entryComponents : [InfoSintomasComponent]
})

export class ListarSintomasComponent implements OnInit {
  
  private sintomas : Sintoma[] = [];
  constructor(private sintServ : SintomasService, private http : HttpClient, private modalService: NgbModal) { 

  }

  ngOnInit() {
    this.sintServ.getSints().subscribe( (res: any) =>{
      this.sintomas = res.body;
    },
  error =>{
      console.log(error);
  })
  }


  openModal(info, sint : any){
    const modalRef = this.modalService.open(InfoSintomasComponent, { windowClass : "myCustomModalClass"});
    console.log(sint);
    modalRef.componentInstance.sintoma = sint;
  }

}
