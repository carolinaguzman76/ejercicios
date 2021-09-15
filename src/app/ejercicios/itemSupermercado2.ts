// Vamos a seguir con los itemSupermercado
//
// a la clase ItemDeSUpermercado vamos a añadirle más información
//
// marca: string; <----- la marca del producto
// fechaDeCaducidad: Date <----- fecha en la que caduca el producto.  'el tipo es Date'
// ingredientes: string[] <----- lista de ingradientes
// instruccionesDeUso: string[] <------- como se consume.
//
// Ejemplo
//
// {
//     "nombre": "Rellenos Recheados",
//     "precio": 4.20,
//     "calorias": 447,
//     "marca":"Hacendado",
//     "fechaDeCaducidad":"19-06-2022",
//     "ingredientes":["Cereales 42%", "Leche Desnatada en polvo 2%", "B12", "Hierro"],
//     "instruccionesDeUso": ["Verter Leche en el tazón", "Comer los crujientes cereales"]

export class ItemSupermercado2 {
  private _nombre: string;
  private _precio: number;
  private _calorias: number;
  private _marca: string;
  private _fechaDeCaducidad: Date;
  private _ingredientes: string[];
  private _instruccionesDeUso: string[];

  constructor(nombre: string, precio: number, calorias: number, marca: string, fechaDeCaducidad: Date,
              ingredientes: string[], instruccionesDeUso: string[]) {
    this._nombre = nombre;
    this._precio = precio;
    this._calorias = calorias;
    this._marca = marca;
    this._fechaDeCaducidad = fechaDeCaducidad;
    this._ingredientes = ingredientes;
    this._instruccionesDeUso = instruccionesDeUso;
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

  get marca(): string {
    return this._marca;
  }

  set marca(marca: string) {
    this._marca = marca;
  }

  get fechaDeCaducidad(): Date {
    return this._fechaDeCaducidad;
  }

  set fechaDeCaducidad(fechaDeCaducidad: Date) {
    this._fechaDeCaducidad = fechaDeCaducidad;
  }

  get ingredientes(): string[] {
    return this._ingredientes;
  }

  set ingredientes(ingredientes: string[]) {
    this._ingredientes = ingredientes;
  }

  get instruccionesDeUso(): string[] {
    return this._instruccionesDeUso;
  }

  set instruccionesDeUso(instruccionesDeUso: string[]) {
    this._instruccionesDeUso = instruccionesDeUso;
  }

  esSaludable(): boolean {
    return this.calorias < 300;
  }

}
