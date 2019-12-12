import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export class DiagnosticService{
    _url : string = '';

    constructor(private _http : HttpClient){
        
        this._url = "https://medicpath.herokuapp.com/consulta/getReglas";
        //"http://localhost:3000/consulta/getReglas";
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
}