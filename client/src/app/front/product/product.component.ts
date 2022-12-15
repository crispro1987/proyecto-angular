import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public parametro = '';
  public mesh: any[] = [];
  public product = {
    title_course : '',
    instructor_course : '',
    short_course : '',
    image_course : '',
    alt_course : '',
    value_course : 0,
    value_offer_course : 0
  };

  constructor( private apiService : ApiService,
               private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.parametro = params['producto'];
    })

    this.readProduct();
  }

  readProduct(){
    this.apiService.readProduct('courses','*','url_course',this.parametro).subscribe(resp => {
      if(resp.result != 'Not Found'){
        this.product = resp.results[0];
        this.mesh = JSON.parse(this.product['mesh_course']);
      }
    })
  }

}
