import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export class VerificacionService{
    _url : string = '';
    constructor(private _http: HttpClient) {
        this._url = 'http://localhost:3000/usuarios/verificar/';
    }

    verifyUser(hashId : any){
        return this._http.put(this._url + encodeURIComponent(hashId),
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }
}