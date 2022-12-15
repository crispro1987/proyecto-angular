import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Instructor } from '../models/instructor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  @Output() pagesSearch: EventEmitter<any> = new EventEmitter();
  @Output() cart: EventEmitter<any> = new EventEmitter();

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

  addInstructor(table : string, instructor : Instructor){
    let headers = new HttpHeaders({
      'Content-type':'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Authorization':this.userTokenApi
    });

    const payload = new HttpParams()
    .set('name_instructor', instructor.name_instructor)
    .set('surname_instructor', instructor.surname_instructor)
    .set('email_instructor', instructor.email_instructor)
    .set('date_created_instructor', instructor.date_created_instructor);

    return this.http.post(`${this.url}/${table}?token=no&table=users&suffix=user&except=id_instructor`,payload,{headers:headers})
    .pipe(
      map((resp:any) => {
        return resp;
      })
    )
  }
}
