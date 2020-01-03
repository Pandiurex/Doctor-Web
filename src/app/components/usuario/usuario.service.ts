import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {
  _url: string = "";
  _urlIndividual: string = "";
  constructor(private _http: HttpClient) {
    this._url = "https://medicpath.herokuapp.com/usuarios/userlist/";
    //'http://localhost:3000/usuarios/userlist/';
    this._urlIndividual = "https://medicpath.herokuapp.com/usuarios/";
    //'http://localhost:3000/usuarios/'
  }

  getUsers() {
    return this._http.get(this._url, {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      ),
      observe: "response"
    });
  }

  getUser(id: any) {
    return this._http.get(this._urlIndividual + id, {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      ),
      observe: "response"
    });
  }
}