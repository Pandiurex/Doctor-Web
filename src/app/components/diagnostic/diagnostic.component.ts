import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DiagnosticService } from './diagnostic.service';
import { Regla } from '../../inferencia/regla.class';
import { Atomo } from '../../inferencia/atomo.class';
import { MemoriaTrabajo } from '../../inferencia/memoriaTrabajo.class';
import { ToastrService } from 'ngx-toastr';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css'],
  providers: [DiagnosticService]
})

export class DiagnosticComponent implements OnInit {

  hasPregunta : boolean = false;
  message : string = "";
  baseConocimiento : any[] = [];
  memoriaDeTrabajo = new MemoriaTrabajo();
  reglaEvaluar = new Regla();
  preguntas : string[] = [];
  atomosCondicion : Atomo[] = [];
  contador : number = 0;
  hasResult : boolean = false;
  breadcrumb : string = "";
  idResultado : string = '';
  user : boolean = false;
  constructor(private diagServ : DiagnosticService, private toast : ToastrService, private router : Router) { }

  ngOnInit() {
    if(window.sessionStorage.getItem('usuario')!=null){
      this.user = true;
    }
  }

  iniciarDiagnostico(){
    console.log("inicia")
    let mira : string = "";
    this.diagServ.consulta(mira).subscribe((res : any)  =>{
      //this.hasPregunta = true;
      console.log(res.body);
      
     res.body.reglas.forEach(element => {
        let rule = new Regla();
        this.baseConocimiento.push(rule.desgloseReglas(element));
      });

      console.log(this.baseConocimiento);
      this.hasPregunta = true;
      this.inferencia();
    }, error =>{
      this.toast.error("Hubo un error al conectarse con la base de datos", 'Error');
    })

    }

    inferencia(){
      
        this.reglaEvaluar = this.baseConocimiento[this.contador];
        //console.log("Entro regla");
        //console.log(this.reglaEvaluar);
        for  (var element of this.reglaEvaluar.partesCondicion){
          //console.log(element);
          if(element instanceof Atomo){
            let almacenado = null;

            almacenado =  this.memoriaDeTrabajo.estaAlmacenado(element);
            console.log("Esta en la memoria?" + almacenado)
            if(almacenado===false){
            this.atomosCondicion.push(new Atomo(element.desc,element.estado,element.obj,element.padecimiento));
             this.preguntas.push("¿Ha tenido " + element.desc + " ?");
            }
          }
        };
        //console.log(this.atomosCondicion);
        //console.log(this.preguntas);
        this.contador++;
        if(this.preguntas.length!=0){
          this.generarPregunta();
          }
        else{
          this.analize();
        }
    }

    generarPregunta(){
      this.message = this.preguntas.pop();
    }

    responder(resp : any){
      let atomoEvaluado = this.atomosCondicion.pop();
      if(resp=='Si'){
        atomoEvaluado.estado = true; 
        this.breadcrumb = this.breadcrumb + atomoEvaluado.desc + "->"
      }
      else{
        atomoEvaluado.estado = false; 
      }
      this.memoriaDeTrabajo.almacenarAtomo(atomoEvaluado);

      if(this.atomosCondicion.length>0){
        this.generarPregunta();
      }
      else{
        this.analize();
      }
    }

    analize(){
      let condicion = false;
      condicion = this.reglaEvaluar.checarCondicion(this.memoriaDeTrabajo)
      console.log(condicion);
      if(condicion===true){
        let atomos = this.reglaEvaluar.disparadorReglas(this.memoriaDeTrabajo)
        for(var atomo of atomos){
        this.memoriaDeTrabajo.almacenarAtomo(atomo);
        if(this.reglaEvaluar.objetivo===false)
        this.breadcrumb = this.breadcrumb + atomo.desc + "->"
        }

        if(this.reglaEvaluar.objetivo===true){
          console.log(this.reglaEvaluar.partesConclusion[0].desc)
          this.message="Usted padece de : " + this.reglaEvaluar.partesConclusion[0].desc;
          this.hasResult=true;
          console.log(this.reglaEvaluar.partesConclusion[0]);
          this.idResultado=this.reglaEvaluar.partesConclusion[0].padecimiento;
          if(this.user==true){
            this.guardar();
          }
        }
      }else{
        console.log("No se cumplio: " + this.reglaEvaluar.partesConclusion)
        for(var noCumplido of this.reglaEvaluar.partesConclusion){
          let atomoNoCumplido = new Atomo(noCumplido.desc,false,noCumplido.obj,noCumplido.padecimiento);
          this.memoriaDeTrabajo.almacenarAtomo(atomoNoCumplido);
        }
      }
      
      console.log(this.memoriaDeTrabajo)
      console.log(this.contador);
      console.log(this.baseConocimiento.length);
      if(this.contador<this.baseConocimiento.length && this.hasResult==false){
      this.inferencia();
      }else if(this.hasResult==false){
        this.message="Lo sentimos, no se pudo encontrar su padecimiento conforme sus respuestas";
      }
    }

    guardar(){
      console.log("se envia");
      let values = new HttpParams()
      .set('detalles', this.breadcrumb.replace(/->/g,","))
      .set('usuario', window.sessionStorage.getItem('usuario'))
      .set('padecimiento_final', this.idResultado)
      .set('visible', 'true');

      this.diagServ.guardarHistorial(values).subscribe(res =>{
        console.log("Ok", res)
        
      this.toast.success('Se ha guardado con éxito en su historial', 'Guardado Exitoso!');
      
    }, error =>{
        console.log("Error", error.error);
        this.toast.error(error.error, 'Error');
        this.router.navigate(['/landing'])
    })
    }
}
