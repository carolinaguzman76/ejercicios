export class Guerrero {
  public _nombre: string;
  public _nivelAtaque: number;

  constructor(nombre: string, nivelAtaque: number) {
    this._nombre = nombre;
    this._nivelAtaque = nivelAtaque;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get nivelAtaque(): number {
    return this._nivelAtaque;
  }

  set nivelAtaque(nivelAtaque: number) {
    this._nivelAtaque = nivelAtaque;
  }

}
