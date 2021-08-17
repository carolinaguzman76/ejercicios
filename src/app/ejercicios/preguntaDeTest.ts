// Vamos a Crear la Clase "PreguntaDeTest"
//
// Con los siguientes Atributos:
//
// pregunta    <-- es de tipo String y corresponde a una pregunta.
// opcion1     <-- es de tipo String y corresponde a la opcion 1
// opcion2     <-- es de tipo String y corresponde a la opcion 2
// opcion3     <-- es de tipo String y corresponde a la opcion 3
// opcion4     <-- es de tipo String y corresponde a la opcion 4
// respuesta   <-- es de tipo String y corresponde a la respuesta
//
// --
// Por ejemplo:
//
// Objeto PreguntaTest
//
// pregunta = "Líquido que necesita todo ser vivo para sobrevivir?"
// opcion1 = "Cerveza"
// opcion2 = "Agua"
// opcion3 = "Vino"
// opcion4 = "Barro"
// respuesta = "opcion2"
//
// --
//
//
// Esta Clase SOLAMENTE va a tener un Constructor, un método llamada "responder" y un método llamado "mostrarPorConsola"
//
// responder(respuestaAPregunta: String): boolean    <----  si, la respuesta pasada por parámetro es igual a la variable
// "respuesta" entonces devolvemos "true", "false" en otro caso
// mostrarPorConsola(): void <---- muestra por consola, la Pregunta + sus 4 opciones (NOTA: No se debe mostrar la respuesta correcta)


export class PreguntaDeTest {
  private _pregunta: string;
  private _opcion1: string;
  private _opcion2: string;
  private _opcion3: string;
  private _opcion4: string;
  private _respuesta: string;

  constructor(pregunta: string, opcion1: string, opcion2: string, opcion3: string, opcion4: string, respuesta: string) {
    this._pregunta = pregunta;
    this._opcion1 = opcion1;
    this._opcion2 = opcion2;
    this._opcion3 = opcion3;
    this._opcion4 = opcion4;
    this._respuesta = respuesta;
  }


  get pregunta(): string {
    return this._pregunta;
  }

  set pregunta(pregunta: string) {
    this._pregunta = pregunta;
  }

  get opcion1(): string {
    return this._opcion1;
  }

  set opcion1(opcion1: string) {
    this._opcion1 = opcion1;
  }

  get opcion2(): string {
    return this._opcion2;
  }

  set opcion2(opcion2: string) {
    this._opcion2 = opcion2;
  }

  get opcion3(): string {
    return this._opcion3;
  }

  set opcion3(opcion3: string) {
    this._opcion3 = opcion3;
  }

  get opcion4(): string {
    return this._opcion4;
  }

  get respuesta(): string {
    return this._respuesta;
  }

  set respuesta(respuesta: string) {
    this._respuesta = respuesta;
  }

  set opcion4(opcion4: string) {
    this._opcion4 = opcion4;
  }

  responder(respuestaAPregunta: string): boolean {
    return respuestaAPregunta == this._respuesta;
  }
  mostrarPorConsola() {
    return 'Elige la opcion correcta para la pregunta: ' +  this._pregunta + ' ' + 'Opcion 1: ' + this._opcion1 +  ' ' +
      'Opcion 2: ' + this._opcion2 + ' ' + 'Opcion 3: ' + this._opcion3 + ' ' + 'Opcion 4: ' +  this._opcion4;
  }


}
