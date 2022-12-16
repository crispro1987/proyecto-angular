import { TypePipe } from './type.pipe';

describe('TypePipe', () => {

  const pipe = new TypePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('retorna string vacio si entra valor "0"', () => {
    expect(pipe.transform('0')).toBe('');
  });

  it('retorna "Nuevo" si entra valor "1"', () => {
    expect(pipe.transform('1')).toBe('Nuevo');
  });

  it('retorna "Actualizado" si entra valor "1"', () => {
    expect(pipe.transform('2')).toBe('Actualizado');
  });

  it('retorna null si el valor es null', () => {
    expect(pipe.transform(null)).toBe(null);
  });

});
