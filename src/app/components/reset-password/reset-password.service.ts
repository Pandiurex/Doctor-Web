import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class ResetPassService{
    _url : string = '';
    _urlVerif : string = '';
    private router: Router;
    constructor(private _http: HttpClient) {

        this._url = 'https://medicpath.herokuapp.com/usuarios/cambiarPassword/';
        //'http://localhost:3000/usuarios/cambiarPassword/';

        this._urlVerif = 'https://medicpath.herokuapp.com/usuarios/isValidUrl/';
        //'http://localhost:3000/usuarios/isValidUrl/';
    }

    changePassword(hashId : any, pass : any){
        return this._http.put(this._url + encodeURIComponent(hashId),
                pass.toString(),
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }

    verificarUrl(hashId : any){
        return this._http.get(this._urlVerif + encodeURIComponent(hashId),
            {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
            observe : 'response'
            },
        )
    }
}