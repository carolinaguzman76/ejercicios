import {Persona} from './persona';

export class Familia {
  private _padre: Persona;
  private madre: Persona;
  private hijo: Persona;
  private abuelo: Persona;

  constructor(padre: Persona, madre: Persona, hijo: Persona, abuelo: Persona) {
    this._padre = padre;
    this.madre = madre;
    this.hijo = hijo;
    this.abuelo = abuelo;
  }

  abueloEdad(): number {
    return this.abuelo.devolverEdad();
  }

  quienEsMayor(): string {
    const edadMadre = this.madre.edad;
    const edadPadre = this._padre.edad;
    let result = '';

    if (edadMadre > edadPadre) {
      result = `La madre es mayor y su edad es ${edadMadre}`;
    }

    if (edadMadre < edadPadre) {
      result = `La madre es mayor y su edad es ${edadMadre}`;
    }
    if (edadMadre === edadPadre) {
      result = 'La edad de los 2 es igual';
    }
    return result;
  }

  mediaEdad(): string {
    const edadPadre = this._padre.edad;
    const edadMadre = this.madre.edad;
    const edadHijo = this.hijo.edad;
    const edadAbuelo = this.abuelo.edad;
    let result = '';

    if (edadPadre && edadMadre && edadHijo && edadAbuelo) {
      result = 'La media de edad de la familia es ' + (edadPadre + edadMadre + edadHijo + edadAbuelo) / 4;

    }
    if (!edadAbuelo) {
      result = result + 'Falta la edad del abuelo ';

    }
    if (!edadHijo) {
      result = result + 'Falta la edad del hijo ';

    }
    if (!edadMadre) {
      result = result + 'Falta la edad de la madre ';

    }
    if (!edadPadre) {
      result = result + 'Falta la edad del padre ';

    }
    return result;

  }


}
