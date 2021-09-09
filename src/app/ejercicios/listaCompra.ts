// Crea una clase "ListaCompra"
//
// con un parámetro "compra" es una lista de Strings( private list: string[]  )
//
// SIN constructor, pero si getter y setter.
//
// está clase debe de tener los siguientes métodos:
//
// agregarItemAListaDeCompra(item: string): void <--- este item agrega el valor a la lista
// vaciarListaDeLaCompra(): void  <----- reinicia la lista
// mostrarLista(): void <----- muestra Por consola todos los items.

export class ListaCompra {
  private _compra: string[];

  constructor(compra: string[]) {
    this._compra = compra;
  }

  get compra(): string[] {
    return this._compra;
  }

  set compra(compra: string[]) {
    this._compra = compra;
  }

  agregarItemAListaDeCompra(item: string): number {

    return this.compra.push(item);
  }

  vaciarListaDeLaCompra(): ListaCompra[] {
    return this.compra = [];
  }

  mostrarListaSimplemente(): string[] {
    return this.compra;
  }

  mostrarLista(): void {

    for (let i = 0; i < this.compra.length ; i++) {
      console.log(this.compra[i]);
    }
  }

}
