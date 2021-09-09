// Vamos a definir la clase PersonaConCuentaJoven
//
// Debe de tener las siguientes propiedades:
//
// Nombre,
// edad,
// cuentaJoven (clase previa)
//
// constrcutor getters y setters
//
//
//
// Ahora en el AppComponent:
//
// Vamos a crear 2 personas con Cuenta Joven,  ambos con 100.
//
// Uno va a ser un titular válido y el otro no:
// Mostar ambos por consola (el método 'esTitularValido()' ), además de usar su método mostrar().
// en uno retirar 50, y el otro 500.
//
// volver a mostrar por consola su dinero(método mostrar())
//
//
//
// Notas:
//
// usar getters y setter de forma exclusiva.
// en el método AppComponent, solamente podemos manipular, PersonaConCuentaJoven, no podemos usar directamente las variables de cuentaJoven(solamente para usarlos en el constructor de PersonaConCuentaJoven )

import {CuentaJoven} from "./cuentaJoven";

export class PersonaConCuentaJoven {
  private _nombre: string;
  private _edad: number;
  private _cuentaJoven: CuentaJoven;

  constructor(nombre: string, edad: number, cuentaJoven: CuentaJoven) {
    this._nombre = nombre;
    this._edad = edad;
    this._cuentaJoven = cuentaJoven;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(edad: number) {
    this._edad = edad;
  }

  get cuentaJoven(): CuentaJoven {
    return this._cuentaJoven;
  }

  set cuentaJoven(cuentaJoven: CuentaJoven) {
    this._cuentaJoven = cuentaJoven;
  }

  titularValidoMostrarRetirar(cantidadRetirada: number): string {
    this.cuentaJoven.retirar(cantidadRetirada);

    return 'Los datos del titular son: Nombre titular ' + this.nombre + ' Edad ' + this.edad + ' DNI '
      + this.cuentaJoven.dni + ' Saldo cuenta ' + this.cuentaJoven.dinero + ' ' + this.cuentaJoven.mostrar();
  }
}
