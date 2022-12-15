import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  public searchForm!: FormGroup;

  public courses: any[] = [];

  public search = '';

  public page = 0;
  public pages = 0;
  public pages2 = 1;

  constructor( private apiService : ApiService,
               private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.createForm();
    this.readCourses();
    this.listen();

    this.apiService.pagesSearch.subscribe( data => {
      this.pages = data.data
    })
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  readCourses(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Cargando Cursos',
    });
    Swal.showLoading();

    this.apiService.readAll('courses').subscribe( resp => {
      if(resp.results != 'Not Found'){
        Swal.close();
        this.courses = resp.results;
      }
    })
  }

  createForm(){
    this.searchForm = this.fb.group({
      search: ['']
    })
  }

  listen(){
    this.searchForm.controls.search.valueChanges.subscribe( valor => {
      this.search = valor;
    } )
  }

  nextPage() {
    this.page += 8;
    this.pages2 += 1;
  }

  previousPage() {
    if (this.page > 0) {
      this.page -= 8;
      this.pages2 -= 1;
    }
  }

  btnPaginate() {
    let pag1 = this.courses.length / 8;
    this.pages = Math.ceil(pag1);
  }

}
