export class Cuenta {
  private _titular: string;
  private _cantidad: number;

  constructor(titular: string, cantidad?: number) {
    this._titular = titular;

    if (typeof cantidad === "number") {
      this._cantidad = cantidad;
    } else {
      this._cantidad = 0;
    }
  }


  get cantidad(): number {
    return this._cantidad;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(titular: string) {
    this._titular = titular;
  }

  ingresar(importe: number): number {

    if (importe >= 0) {
      this._cantidad = this._cantidad + importe;
    }
    return this._cantidad;
  }

  retirar(importe: number): number {
    this._cantidad = this._cantidad - importe;

    if (this._cantidad < 0) {
      this._cantidad = 0;
    }
    return this._cantidad;
  }

}
