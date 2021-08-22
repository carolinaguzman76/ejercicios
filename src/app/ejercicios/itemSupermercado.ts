// Vamos a crear una Clase llamada "ItemSupermercado"
//
// Donde tendrá varios atributos
//
// nombre: string
// precio: number
// calorias: number;
//
// con getters, setter, constructores....
//
//
// vamos a crear el siguiente método:
//
// esSaludable(): boolean <----- devuelve cierto si el producto es saludable, falso en otro caso:
//
// para que sea saludable, tiene que tener menos de 300 calorias.
//
//
// Después vamos a modificar la clase del Ejercicio anterior "ListaCompra" (listaCompra2)  para que en lugar de que
// tenga una lista de string (list: string[])
// ahora sea una lista de nuestra nueva Clase, ItemSupermercado.
//
// Todos los métodos deben de seguir funcionando.
// Y vamos a crear un nuevo método:
//
// eliminarAlimentosQueEngordan():void <---- este método va a eliminar todos los items que NO sean saludables.

export class ItemSupermercado {
  private _nombre: string;
  private _precio: number;
  private _calorias: number;

  constructor(nombre: string, precio: number, calorias: number) {
    this._nombre = nombre;
    this._precio = precio;
    this._calorias = calorias;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(precio: number) {
    this._precio = precio;
  }

  get calorias(): number {
    return this._calorias;
  }

  set calorias(calorias: number) {
    this._calorias = calorias;
  }

  esSaludable(): boolean {
    return this.calorias < 300;
  }

}
