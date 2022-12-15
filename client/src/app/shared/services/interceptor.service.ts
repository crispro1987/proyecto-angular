import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Cargando',
    });
    Swal.showLoading();

    return next.handle(req).pipe(
      finalize( () => Swal.close())
    )
  }

  manejarError( error: HttpErrorResponse){
    if(error.status === 404){
      console.log(error.status);
    }else{
      return throwError(error);
    }
    //return throwError(error);
  }
}

