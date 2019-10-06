import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export class SintomasService{
    _url : string = '';
    _urlIndividual : string = '';
    _urlComponente : string = '';
    _urlCreate : string = '';
    _urlCompList : string = '';
    _urlModificar : string = '';
    constructor(private _http: HttpClient) {
        this._url = 'http://localhost:3000/sintomas/sintlist/';
        this._urlIndividual = 'http://localhost:3000/sintomas/';
        this._urlComponente = 'http://localhost:3000/sintomas/componentes';
        this._urlCreate = 'http://localhost:3000/sintomas/create';
        this._urlCompList = 'http://localhost:3000/sintomas/comp/getComponents/';
        this._urlModificar = 'http://localhost:3000/sintomas/update/'
    }

    getSints(){
        return this._http.get(this._url,
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }

    getSint(hashId : any){
        return this._http.get(this._urlIndividual + encodeURIComponent(hashId),
            {
              headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
        )
    }

    getNames(ids : HttpParams){
        console.log(ids);
        return this._http.post(this._urlComponente,
            ids.toString(),
            {
                headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
                observe : 'response'
            }
        )
    }

    createSintoma(values : HttpParams){
        return this._http.post(this._urlCreate,
            values.toString(),
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }

    getComponents(){
        return this._http.get(this._urlCompList,
            {
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
              observe : 'response'
            },
          )
    }

    modificar(id : any, parametros : HttpParams){
        return this._http.put(this._urlModificar + id,
             parametros.toString(),
            {
                headers: new HttpHeaders()
                  .set('Content-Type', 'application/x-www-form-urlencoded'),
                observe : 'response'
            },
        )
    }
}