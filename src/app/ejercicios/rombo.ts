// Crear la clase Rombo, la cual debe tener dos propiedades:
// DiagonalVertical y DiagonalHorizontal.
//
// Sus accessos serán por "get" y "set"
//
// Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
//
//
// Y también debe de tener un método que calcule el area, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
// Este método devolverá un número.


export class Rombo {

  private _diagonalVertical: number;
  private _diagonalHorizontal: number;

  constructor(diagonalVertical: number, diagonalHorizontal: number) {
    this._diagonalVertical = diagonalVertical;
    this._diagonalHorizontal = diagonalHorizontal;
  }

  get diagonalVertical(): number {
    return this._diagonalVertical;
  }

  set diagonalVertical(diagonalVertical: number) {
    this._diagonalVertical = diagonalVertical;
  }

  get diagonalHorizontal(): number {
    return this._diagonalHorizontal;
  }

  set diagonalHorizontal(diagonalHorizontal: number) {
    this._diagonalHorizontal = diagonalHorizontal;
  }

  calculoArea(): number {
    return this.diagonalVertical * this.diagonalHorizontal;
  }

}
