import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;

  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Recuperar todos los datos de tabla', () => {
    service.readAll('courses').subscribe(todos => {
      console.log(todos);
    });
    const req = httpTestingController.expectOne('https://api-angular.dosiscl.com/courses');
    expect(req.request.method).toBe('GET');
    req.flush({ status: 200, total: 1, results: [{id_course: 1, title_course: 'titulo de curso', url_course: 'url-course', instructor_course: 'Instructor', short_course: 'descripcion corta', image_course: 'imagen', alt_course: 'alt imagen', value_course: 2, value_offer_course: 1, mesh_course: [{ texto: 'mesh'}], tag_course: 'tag de lenguajes', date_created_course: '2022-12-15', date_updated_course: ''}]})
  });
});
