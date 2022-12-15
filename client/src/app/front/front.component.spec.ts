import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../shared/services/api.service';
import { FormBuilder } from '@angular/forms';
import { FrontComponent } from './front.component';
import { ProductsPipe } from './shared/filters/products.pipe';


describe('FrontComponent', () => {
  let component: FrontComponent;
  let fixture: ComponentFixture<FrontComponent>;
  let service: ApiService;
  let httpTestingController : HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontComponent, ProductsPipe ],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(FrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('debe dar cantidad de páginas de 8 productos', () => {
    component.pages = 2;
    // Definimos la lista de cursos y el número de páginas esperado
    component.courses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const expected = 2;

    // Llamamos a la propiedad btnPaginate para que calcule el número de páginas
    component.btnPaginate();

    // Verificamos que el número de páginas coincide con lo esperado
    expect(component.pages).toEqual(expected);
  });
});