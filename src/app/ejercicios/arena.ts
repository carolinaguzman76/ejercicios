import {Guerrero} from './guerrero';

export class Arena {

  resultadoBatalla(guerrero1: Guerrero, guerrero2: Guerrero): string {
    const nivelAtaqueGuerrero1 = guerrero1.nivelAtaque;
    const nivelAtaqueGuerrero2 = guerrero2.nivelAtaque;


    if (nivelAtaqueGuerrero1 > nivelAtaqueGuerrero2) {
      return `El ganador es el guerrero ${guerrero1.nombre}`;

    }

    if (nivelAtaqueGuerrero1 < nivelAtaqueGuerrero2) {
      return `El ganador es el guerrero ${guerrero2.nombre}`;

    }

    return 'El resultado de la batalla es empate';

  }
}
