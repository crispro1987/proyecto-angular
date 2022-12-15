import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  @Output() pagesSearch: EventEmitter<any> = new EventEmitter();

  private url = environment.api.url;
  private userTokenApi = environment.api.tokenUser;

  constructor( private http: HttpClient ) { }

  readAll( table : string ){
    let headers = new HttpHeaders({
      'Authorization':this.userTokenApi
    }); 

    return this.http.get(`${this.url}/${table}`,{headers:headers})
      .pipe(
        map((resp:any) => {
          return resp;
        })
      )
  }

  readProduct( table:string, select:string, linkTo:string, search:string ){
    let headers = new HttpHeaders({
      'Authorization':this.userTokenApi
    });

    return this.http.get(`${this.url}/${table}?select=${select}&linkTo=${linkTo}&search=${search}`,{headers:headers})
      .pipe(
        map((resp:any) => {
          return resp;
        })
      )
  }
}
