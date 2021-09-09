// AHora vamos a Crear la Clase TestExamenFinal
//
// Tendra como atributos 6 preguntas:
//
// pregunta1: PreguntaDeTest;
// pregunta2: PreguntaDeTest;
// pregunta3: PreguntaDeTest;
// pregunta4: PreguntaDeTest;
// pregunta5: PreguntaDeTest;
// pregunta6: PreguntaDeTest;
//
//
// todo por constructor
//
// Tendrá 2 métodos:
//
// mostrarExamen(): void <----- Imprime por consola, todas las preguntas
// responderExamen(respuesta1:String,respuesta2:String,respuesta3:String,respuesta4:String,respuesta5:String,
// respuesta6:String):void <----- Como su nombre indica, consiste en las respuestas de todas las preguntas
//
// Si tenemos 6 respuestas correctas,  se imprime por consola, "Matricula de Honor"
// Si tenemos 3,4 o 5 más respuestas correctas, se imprime por consola, "examen aprobado"
// Si tenemos menos de 3, Se imprime por consola "Suspenso".
//
//
//
// En App Component, Crear 1 Instancia de "TestExamenFinal" y ejecuta primero, "mostrarExamen" luego, ejecuta 3 veces
// ResponderExamen, una con Matricula, otra con Aprobado, y una con Suspenso.

import {PreguntaDeTest} from "./preguntaDeTest";

export class TestExamenFinal {
  private _pregunta1: PreguntaDeTest;
  private _pregunta2: PreguntaDeTest;
  private _pregunta3: PreguntaDeTest;
  private _pregunta4: PreguntaDeTest;
  private _pregunta5: PreguntaDeTest;
  private _pregunta6: PreguntaDeTest;

  constructor(pregunta1: PreguntaDeTest, pregunta2: PreguntaDeTest, pregunta3: PreguntaDeTest, pregunta4: PreguntaDeTest,
              pregunta5: PreguntaDeTest, pregunta6: PreguntaDeTest) {
    this._pregunta1 = pregunta1;
    this._pregunta2 = pregunta2;
    this._pregunta3 = pregunta3;
    this._pregunta4 = pregunta4;
    this._pregunta5 = pregunta5;
    this._pregunta6 = pregunta6;
  }

  get pregunta1(): PreguntaDeTest {
    return this._pregunta1;
  }

  set pregunta1(pregunta1: PreguntaDeTest) {
    this._pregunta1 = pregunta1;
  }

  get pregunta2(): PreguntaDeTest {
    return this._pregunta2;
  }

  set pregunta2(pregunta2: PreguntaDeTest) {
    this._pregunta2 = pregunta2;
  }

  get pregunta3(): PreguntaDeTest {
    return this._pregunta3;
  }

  set pregunta3(pregunta3: PreguntaDeTest) {
    this._pregunta3 = pregunta3;
  }

  get pregunta4(): PreguntaDeTest {
    return this._pregunta4;
  }

  set pregunta4(pregunta4: PreguntaDeTest) {
    this._pregunta4 = pregunta4;
  }

  get pregunta5(): PreguntaDeTest {
    return this._pregunta5;
  }

  set pregunta5(pregunta5: PreguntaDeTest) {
    this._pregunta5 = pregunta5;
  }

  get pregunta6(): PreguntaDeTest {
    return this._pregunta6;
  }

  set pregunta6(pregunta6: PreguntaDeTest) {
    this._pregunta6 = pregunta6;
  }

  mostrarExamen(): string {
    return this.pregunta1.pregunta + ' ' + this.pregunta2.pregunta + ' ' + this.pregunta3.pregunta + ' ' +
      this.pregunta4.pregunta + ' ' + this.pregunta5.pregunta + ' ' + this.pregunta6.pregunta;
  }

  responderExamen(respuesta1: string, respuesta2: string, respuesta3: string, respuesta4: string, respuesta5: string,
                  respuesta6: string): PreguntaDeTest {
    let respuestasCorrectas = 0;

    if(this.pregunta1.responder(respuesta1)) {
      respuestasCorrectas = respuestasCorrectas + 1;
    } if(this.pregunta2.responder(respuesta2)) {
      respuestasCorrectas = respuestasCorrectas + 1;
    } if(this.pregunta3.responder(respuesta3)) {
      respuestasCorrectas = respuestasCorrectas + 1;
    } if(this.pregunta4.responder(respuesta4)) {
      respuestasCorrectas = respuestasCorrectas + 1;
    } if(this.pregunta5.responder(respuesta5)) {
      respuestasCorrectas = respuestasCorrectas + 1;
    } if(this.pregunta6.responder(respuesta6)) {
      respuestasCorrectas = respuestasCorrectas + 1;
    }

    if (respuestasCorrectas === 6) {
      return 'Matricula de honor';
    } if (respuestasCorrectas > 2 && respuestasCorrectas < 6) {
      return 'Examen aprobado';
    } else {
      return 'Suspenso';
    }
  }


}
