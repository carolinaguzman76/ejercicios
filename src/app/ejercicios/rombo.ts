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
    return this._diagonalVertical * this._diagonalHorizontal;
  }

}
