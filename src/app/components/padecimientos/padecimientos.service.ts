import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export class PadecimientoService{
    _url : string = "";
    _urlInd : string = "";
    _create : string  = "";
    _urlModificar = "";

    constructor(private _http: HttpClient){
        this._url = "http://localhost:3000/padecimientos/padlist";
        this._urlInd = "http://localhost:3000/padecimientos/"
        this._create = "http://localhost:3000/padecimientos/create"
        this._urlModificar = 'http://localhost:3000/padecimientos/update/'
    }

    getPads(){
        return this._http.get(this._url,
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }

    getPad(hashId : any){
        return this._http.get(this._urlInd + encodeURIComponent(hashId),
            {
              headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
        )
    }

    createPadecimiento(values : FormData){
        return this._http.post(this._create,
            values,
            {
              observe : 'response'
            },
          )
    }
    
    updatePadecimiento(values : FormData, hashId : any){
        return this._http.put(this._urlModificar + encodeURIComponent(hashId),
            values,
                {
                 observe : 'response'
                },
        )
    }
}