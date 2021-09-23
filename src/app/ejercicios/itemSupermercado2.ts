// Vamos a seguir con los itemSupermercado
//
// a la clase ItemDeSupermercado vamos a añadirle más información
//
// marca: string; <----- la marca del producto
// fechaDeCaducidad: Date <----- fecha en la que caduca el producto.  'el tipo es Date'
// ingredientes: string[] <----- lista de ingredientes
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
//
//      Funciones que necesito:
//      - Comprobar si tiene hierro
//      - Comprobar si esta caducado o le queda una semana
//      - Comprobar marca
//      - Comprobar si contiene instrucciones

export class ItemSupermercado2 {
  private _nombre: string;
  private _precio: number;
  private _calorias: number;
  private _marca: string;
  private _fechaDeCaducidad: Date;
  private _ingredientes: string[];
  private _instruccionesDeUso?: string[] | undefined;

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

  get instruccionesDeUso(): string[] | undefined {
    return this._instruccionesDeUso;
  }

  set instruccionesDeUso(instruccionesDeUso: string[] | undefined) {
    this._instruccionesDeUso = instruccionesDeUso;
  }

  esSaludable(): boolean {
    return this.calorias < 300;
  }

  contineHierro(): boolean {
    return this.ingredientes.includes('Hierro');
  }

  comprobacionMarca(): string {
    switch (this.marca) {
      case 'Hacendado':
        return 'H';
      case 'Alcampo':
        return 'A';
      case 'Carrefour':
        return 'C';
      default:
        return 'No es una marca correcta';
    }
  }

  // no esta funcionando, devuelve true en los dos ejemplos

  contieneInstrucciones(): boolean {
    console.log(typeof this.instruccionesDeUso);
    if (this.instruccionesDeUso == []) {
      console.log('dentro del if false');
      return false;
    } else {
      console.log('dentro del if true')
      return true;
    }
  }

  comprobacionFechaCaducidad(): string {
    let fechaActual = new Date();
    let diferenciaEntreFechas = (this.fechaDeCaducidad.getTime() - fechaActual.getTime()) / (1000 * 60 * 60 * 24);

    if (diferenciaEntreFechas < 7) {
      return 'caducado';
    } if (diferenciaEntreFechas >= 7 && diferenciaEntreFechas < 8 ) {
      return 'proxima caducidad';
    } else {
      return 'sin caducar';
    }


  }



}
