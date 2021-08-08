// Crear una clase Libro que contenga los siguientes atributos:
// – ISBN
//
// – Titulo
//
// – Autor
//
// – Número de páginas
//
// Crear sus respectivos métodos get y set correspondientes para cada atributo.
// Crear 2 objetos Libro (los valores que se quieran) y mostrarlos por pantalla.
//
// Por último, indicar cuál de los 2 tiene más páginas.


export class Libro {
  private _ISBN: number;
  private _titulo: string;
  private _autor: string;
  private _numeroPaginas: number;

  constructor(ISBN: number, titulo: string, autor: string, numeroPaginas: number) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroPaginas = numeroPaginas;
  }

  get ISBN(): number {
    return this._ISBN;
  }

  set ISBN(ISBN: number) {
    this._ISBN = ISBN;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(titulo: string) {
    this._titulo = titulo;
  }

  get autor(): string {
    return this._autor;
  }

  set autor(autor: string) {
    this._autor = autor;
  }

  get numeroPaginas(): number {
    return this._numeroPaginas;
  }

  set numeroPaginas(numeroPaginas: number) {
    this._numeroPaginas = numeroPaginas;
  }

  mayorNumeroPaginas(libro1: Libro, libro2: Libro): string {
    const nroPaginas1 = libro1.numeroPaginas;
    const nroPaginas2 = libro2.numeroPaginas;
    const titulo1 = libro1.titulo;
    const titulo2 = libro2.titulo;
    let resultado = '';

    if(nroPaginas1 > nroPaginas2) {
      resultado = 'Tiene mas paginas ' + titulo1;
    } if(nroPaginas1 < nroPaginas2) {
      resultado = 'Tiene mas paginas ' + titulo2;
    } if(nroPaginas1 === nroPaginas2) {
      resultado = 'Tienen el mismo numero de paginas';
    }
    return resultado;
  }

}
