import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class SignupService{
    _url : string = '';
    
    constructor(private _http: HttpClient) {
        this._url = 'http://localhost:3000/usuarios/create';
    }

    private body = new HttpParams()
    .set('username', 'onetap')
    .set('password', '123456');

    checkLogin(valores : HttpParams){
        console.log(this._url);
        console.log(valores.toString());
        return this._http.post(this._url,
            valores.toString(),
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
            }
          )
        .pipe(
       );
    }
}