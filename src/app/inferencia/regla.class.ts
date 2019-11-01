import {Atomo} from './atomo.class';
import {MemoriaTrabajo} from './memoriaTrabajo.class';
import {PilaBooleana} from './pilaBooleana.class';

export class Regla{
partesCondicion : Array<any>;
partesConclusion : Array<any>;
marca : Boolean;
disparo : Boolean;
objetivo : Boolean;

 constructor(){
    this.partesCondicion= [];
    this.partesConclusion= [];
    this.marca=false;
    this.disparo=false;
    this.objetivo=false;
 }

 checarCondicion(memoria){
    let memoriaTrabajo = new MemoriaTrabajo();
    memoriaTrabajo = memoria;
    let pila = new PilaBooleana();
    let verdadInicial=false,verdadComparacion=false;

    for (var condicion of this.partesCondicion){
        if(condicion instanceof Atomo){
            let atomoTemporal= new Atomo(condicion.desc,condicion.estado,condicion.obj);
            let atomoMemoria =  memoriaTrabajo.obtenerAtomo(atomoTemporal);
                verdadInicial=atomoTemporal.estado&&atomoMemoria.estado;
                pila.push(verdadInicial);
        }
        else if(condicion=== "~"){
            console.log("Tiene un atomo negado");
                verdadInicial=pila.datos.pop();
                verdadInicial=!verdadInicial;
                pila.push(verdadInicial);
        }
        else if(condicion=== "&"){
            console.log("Tiene conjunción");

            verdadInicial=pila.datos.pop();

            verdadComparacion=pila.datos.pop();

            pila.push(verdadInicial&&verdadComparacion);
        }
        else if(condicion=== "|"){
            
            verdadInicial=pila.datos.pop();

            verdadComparacion=pila.datos.pop();

            pila.push(verdadInicial||verdadComparacion);
        }
    };

    return pila.datos.pop();

}

disparadorReglas(mt){
    console.log("Se llego al disparador");
    let atomoTemporal=null;
    let esObjetivo=false;
    this.disparo=true;
    let atomos=[];
    for (var element of this.partesConclusion){
        if(element instanceof Atomo){
            atomoTemporal=element;
            atomos.push(atomoTemporal);
            if(atomoTemporal.objetivo) esObjetivo=true;
        }else if(element=== "~"){
            atomoTemporal.estado=!atomoTemporal.estado;
        }
    };
    console.log("Termina Disparador");
    return atomos;
}

desgloseReglas(regla : any){
    let partes = regla.context.split("_");
    let condicion,conclusion,atomo,obj;
    condicion=conclusion=atomo=obj=false;

    partes.forEach(parte =>{
        switch(parte){
            case "<atomo>": atomo=true;
                            obj=false;
                            break;
            
            case "</atomo>": atomo=false;
                             obj=false;
                             break;
                            
            case "<atomoObj>": atomo=true;
                               obj=true;
                               this.objetivo=true;
                               break;

            case "</atomoObj>": atomo=false;
                                obj=false;
                                break;
            
            case "<condicion>": condicion=true;
                                break;
            
            case "</condicion>": condicion=false;
                                 break;
            
            case "<conclusion>": conclusion=true;
                                 break;
                        
            case "</conclusion>": conclusion=false;
                                  break;
                
            case "<negacion/>": if(condicion&&!conclusion) this.partesCondicion.push("~");
                                if(conclusion&&!condicion) this.partesConclusion.push("~");
                                break;

            case "<conjuncion/>": if(condicion&&!conclusion) this.partesCondicion.push("&");
                                  if(conclusion&&!condicion) this.partesConclusion.push("&");
                                  break;
            
            case "<disyuncion/>": if(condicion&&!conclusion) this.partesCondicion.push("|");
                                  if(conclusion&&!condicion) this.partesConclusion.push("|");
                                  break;

            default: if(atomo){
                let atomoRegla = new Atomo(parte,true,obj);
                if(condicion&&!conclusion&&!obj) this.partesCondicion.push(atomoRegla);
                if(conclusion&&!condicion) this.partesConclusion.push(atomoRegla);
            }
            break;
        }
    });
    return this;
  }
}