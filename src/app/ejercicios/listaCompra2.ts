import {ItemSupermercado} from "./itemSupermercado";

export class ListaCompra2 {
  private _compra: ItemSupermercado[];

  constructor(compra: ItemSupermercado[]) {
    this._compra = compra;
  }

  get compra(): ItemSupermercado[] {
    return this._compra;
  }

  set compra(compra: ItemSupermercado[]) {
    this._compra = compra;
  }

  agregarItemAListaDeCompra(item: ItemSupermercado) {

    return this.compra.push(item);
  }

  vaciarListaDeLaCompra() {
    return this.compra = [];
  }

  mostrarListaSimplemente() {
    return this.compra;
  }

  mostrarLista() {

    for (let i = 0; i < this.compra.length; i++) {
      console.log(this.compra[i]);
    }
  }

  eliminarAlimentosQueEngordan(itemAComprobar: ItemSupermercado) {

    return this.compra.filter(itemAComprobar.esSaludable);

  }


}
