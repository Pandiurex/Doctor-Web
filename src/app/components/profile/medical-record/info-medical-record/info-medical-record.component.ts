import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
import { ProfileService } from "../../profile.service";
@Component({
  selector: "app-info-medical-record",
  templateUrl: "./info-medical-record.component.html",
  styleUrls: ["./info-medical-record.component.css"],
  providers: [ProfileService]
})
export class InfoMedicalRecordComponent implements OnInit {
  @Input() public historial;
  padecimientoInfo = {} as any;
  public injurys: any;
  public url: string = "";
  constructor(
    public activeModal: NgbActiveModal,
    private profileServ: ProfileService
  ) {}

  ngOnInit() {
    this.profileServ.getHistory(this.historial).subscribe(
      (res: any) => {
        console.log(res.body);
        this.historial = res.body[0];
        this.padecimientoInfo = res.body[1];

        this.injurys = this.historial.detalles.split(',');
        console.log(this.injurys);
        

        if (this.padecimientoInfo.url_imagen_pad != null) {
          this.url =
            "data:image/jpg;base64," +
            this.padecimientoInfo.url_imagen_pad.toString();
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
