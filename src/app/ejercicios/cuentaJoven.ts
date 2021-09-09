// Vamos a definir ahora una “Cuenta Joven”, para ello vamos a crear una nueva clase CuentaJoven.
//
// Debe de tener las siguientes propiedades:
//
// Titular,
// edad,
// DNI,
// dinero
//
// Construye los siguientes métodos para la clase:
//
// Un constructor con todos los parámetros.
// Los setters y getters.
// esTitularValido()  ->que devuelve 'true' si el titular es mayor de edad pero menor de 25 años y 'false' en caso contrario.
// retirar(cantidad): number  -> solo puede retirar dinero si el titular es válido (usando la función anterior) en caso de que se intente retirar
// más dinero que el disponible, se devuelve el resto.
// Además debemos dejar la cantidad de dinero actualizada.
//
// Ejemplo:
//
// Si tenemos guardado 200, y queremos retirar 220, devolvemos 200.
//
// dinero queda en 0.
//
//
// mostrar() debe devolver el mensaje de “Cuenta Joven” y la bonificación de la cuenta.
// ingresar(cantidad) debemos abonar la cantidad a 'dinero', tenemos como límte 3000. En caso de superar el límite, no se abona nada.

export class CuentaJoven {
  private _titular: string;
  private _edad: number;
  private _dni: number;
  private _dinero: number;

  constructor(titular: string, edad: number, dni: number, dinero: number) {
    this._titular = titular;
    this._edad = edad;
    this._dni = dni;
    this._dinero = dinero;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(titular: string) {
    this._titular = titular;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(edad: number) {
    this._edad = edad;
  }

  get dni(): number {
    return this._dni;
  }

  set dni(dni: number) {
    this._dni = dni;
  }

  get dinero(): number {
    return this._dinero;
  }

  set dinero(dinero: number) {
    this._dinero = dinero;
  }

  esTitularValido(): boolean {
    const edad = this.edad;

    if (edad > 17 && edad < 25) {
      return true;
    } else {
      return false;
    }
  }

  retirar(cantidadRetirada: number): number {
    const titularValido = this.esTitularValido();

    if (titularValido) {
      if (cantidadRetirada >= this.dinero) {
        this.dinero = 0;
      }
      if (cantidadRetirada < this.dinero) {
        this.dinero = this.dinero - cantidadRetirada;
      }
    }
    return this.dinero;
  }

  mostrar(): string {
    const dinero = this.dinero;

    return 'Cuenta joven. El saldo actual es: ' + dinero + ' euros';
  }

  ingresar(cantidadIngresada: number): number {

    if (cantidadIngresada < 3000) {
     this.dinero = this.dinero + cantidadIngresada;
    }
    return this.dinero;
  }

}
