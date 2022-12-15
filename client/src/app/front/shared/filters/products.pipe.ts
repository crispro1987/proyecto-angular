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

      /** Primero eliminamos acentos y caracteres especiales y luego filtramos la palabra de search en arreglo de productos proveniente de la base de datos */

      search = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      filtered = value.filter(prod => prod.tag_course.includes(search));

    }

    /** Páginas para paginación */

    let pag1 = filtered.length / 8;
    let pages = Math.ceil(pag1);

    this.apiService.pagesSearch.emit({
      data: pages
    })

    return filtered.slice(page, page + 8);
  }

}
