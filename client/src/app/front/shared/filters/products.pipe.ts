import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  constructor( private apiService : ApiService ){}

  transform(value: any[], page: number, search: string): any[] {
    if(!value){
      return null;
    }

    let filtered = value;

    if(search){
      filtered = value.filter(prod => prod.tag_course.includes(search));
    }

    let pag1 = filtered.length / 8;
    let pages = Math.ceil(pag1);

    this.apiService.pagesSearch.emit({
      data: pages
    })

    return filtered.slice(page, page + 8);
  }

}
