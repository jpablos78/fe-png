import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject, of, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import IConsultas from './IConsulta';
import IUnidadTiempo from './IUnidadTiempo';
import IProcesar from './IProcesar';
import IFormasPago from './IFormasPago';
import { environment } from '../../environments/environment';
import { transformError } from '../common/common';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getDocumentos(): Observable<IConsultas[]> {
    return this.http.get<any>('/assets/data/consulta.json')
      .pipe(
        map(res => res.data as IConsultas[])
      );
  }

  getConsulta() {
    return this.http.get<any>('/assets/data/consulta.json')
      .toPromise()
      .then(res => res.data as IConsultas[])
      .then(data => data);
  }

  // unidades de tiempo
  getUnidadesTiempo(): Observable<IUnidadTiempo[]> {
    return this.http.get<any>('/assets/data/unidad-tiempo.json')
      .pipe(
        map(res => res.data as IUnidadTiempo[])
      );
  }

  // procesar
  getDocumentosProcesar(): Observable<IProcesar[]> {
    return this.http.get<any>('/assets/data/procesar.json')
      .pipe(
        map(res => res.data as IProcesar[])
      );
  }

  // formas de pago
  getFormasPago(): Observable<IFormasPago[]> {
    return this.http.get<any>(environment.baseUrl)
      .pipe(
        map(res => {
          if (res.success) {
            return res.data as IFormasPago[];
          } else {
            // alert(res.mensaje);
            // throw new Error('Valid token not returned');
            // throwError('Valid token not returned');
            // catchError(e => throwError(new Error('SOMETHING BAD HAPPENED')));
            // catchError(error => {
            //  alert('xxx');
            // });

            // throw new Error(res.mensaje);
            throw (res.mensaje);
          }
        }),
        catchError(transformError)
        /*  catchError(error => {
            let errorMessage;
            console.log(error);
            console.log('caught mapping error and rethrowing', error);
            console.log(error.status);
            console.log(error.statusText);
            console.log(error.message);
            errorMessage = `Request failed with ${error.status} ${error.statusText} ${error.message}`;
            return throwError(errorMessage);
          }) */
      );
  }

  /*
  errorHandler(error: HttpErrorResponse) {
    // console.log(error.status);
    let errorMessage = 'An unknown error has occurred';

    console.log(error.status);

    if (typeof error === 'string') {
      console.log('typeof error === string');
    }

    if (error.error instanceof Error) {
      console.log('error.error instanceof ErrorEvent');
    }

    if (error.status) {
      console.log('error.status');
    }

    if (typeof error === 'string') {
      errorMessage = error;
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Error! ${error.error.message}`;
    } else if (error.status) {
      errorMessage = `Request failed with ${error.status} ${error.statusText}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    // console.log(Observable.throw(error.message || "Server Error"));
    // return Observable.throw(error.message || "Server Error");
  }
  */
}
