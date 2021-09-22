import {ItemSupermercado2} from "./itemSupermercado2";

export class ListaCompra3 {
  private _compra: ItemSupermercado2[];

  constructor(compra: ItemSupermercado2[]) {
    this._compra = compra;
  }


  get compra(): ItemSupermercado2[] {
    return this._compra;
  }

  set compra(compra: ItemSupermercado2[]) {
    this._compra = compra;
  }


}
