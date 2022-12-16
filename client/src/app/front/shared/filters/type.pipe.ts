import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return null;
    }

    let type = '';

    switch (value) {
      case "1":
        type = 'Nuevo';
        break;
      case "2":
        type = 'Actualizado';
        break;
      default:
        type = '';
        break;
    }

    return type;
  }

}
