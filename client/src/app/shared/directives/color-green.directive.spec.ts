import { ElementRef } from '@angular/core';
import { ColorGreenDirective } from './color-green.directive';

describe('ColorGreenDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new ColorGreenDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('cambiar color de texto a verde', () => {
    // Creamos una instancia de ElementRef para simular el elemento al que se aplicaría la directiva
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new ColorGreenDirective(elementRef);

    // Inicializamos la directiva
    directive.ngOnInit();

    // Verificamos que el color de fondo del elemento sea verde
    expect(elementRef.nativeElement.style.color).toBe('green');
  })
});
