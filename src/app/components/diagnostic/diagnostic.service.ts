import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DiagnosticService{
    _url : string = '';
    _saveUrl : string = '';
    constructor(private _http : HttpClient){
        
        this._url = "https://medicpath.herokuapp.com/consulta/getReglas";
        //"http://localhost:3000/consulta/getReglas";
        this._saveUrl = "https://medicpath.herokuapp.com/historial/create"
        //"http://localhost:3000/historial/create"
    }

    consulta(mira : any){
        return this._http.get(this._url,
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }

    guardarHistorial(valores : HttpParams){
        return this._http.post(this._saveUrl,
            valores.toString(),
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }
}