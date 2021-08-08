// 1) Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
//
// El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.
//
// Crea sus métodos get, set y toString.
//
// Tendrá dos métodos especiales:
//
// ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
// retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.


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
