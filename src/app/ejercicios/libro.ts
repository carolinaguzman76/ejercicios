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
    const nroPaginas1 = libro1._numeroPaginas;
    const nroPaginas2 = libro2._numeroPaginas;
    const titulo1 = libro1._titulo;
    const titulo2 = libro2._titulo;
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
