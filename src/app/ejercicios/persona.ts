export class Persona {
  private nombre: string;
  // @ts-ignore
  public edad: number;

  constructor(nombre: string) {
    this.nombre = nombre

  }

  calculaEdad(): string {
    return this.nombre;
  }

  obtenerEdad(year: number): number {

    const fechaActual = new Date().getFullYear();
    this.edad = fechaActual - year;
    return this.edad;
  }

  devolverEdad(): number {
    return this.edad

  }

  get padre():Persona {
    return this.padre;
  }

  set padre(persona: Persona) {
    this.padre = persona
  }

}
