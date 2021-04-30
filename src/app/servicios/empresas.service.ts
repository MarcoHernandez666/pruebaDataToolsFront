import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Response } from '../modelos/response.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService { 

  urlEndPoint = environment.urlEndPoint;
  urlEndPointLocal = environment.urlEndPointTestLocal;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  constructor(private http: HttpClient) { }

  agregarEmpresa(empresa): Observable<Response> {   
    return this.http.post<Response>(environment.production ? this.urlEndPoint + 'empresasAuto/webresources/servicios/empresa/crear' :
    this.urlEndPointLocal + 'empresasAuto/webresources/servicios/empresa/crear', empresa)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  consultarEmpresas(): Observable<Response> {   
    return this.http.get<Response>(environment.production ? this.urlEndPoint + 'empresasAuto/webresources/servicios/empresa/consultar' :
    this.urlEndPointLocal + 'empresasAuto/webresources/servicios/empresa/consultar')
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
