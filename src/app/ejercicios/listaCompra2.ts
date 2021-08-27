// vamos a seguir extendiendo la clase "ListaCompra"
//
// Ahora vamos a crear los siguientes métodos
//
// dameTodosLosItemsConPrecioMenorA(precio:number): itemSupermercado[] <----- devuelve una lista con todos los items que
// no superen el precio.

// agregarItemAListaDeCompra(item: ItemSupermercado):void <-------= vamos a modificar este método para que NO no se
// puedan añadir items duplicados, es decir, si el item YA EXISTIA, este no se añade.

// eliminarAlimentosSanos():void <---- este método va a eliminar todos los items que sean saludables. (similar al método
// eliminarAlimentosQueEngordan())

// eliminarItemDeLista(item: ItemSupermercado): ItemSupermercado <----- elimina un item y devolvemos el item eliminado.

// fusionarCompras(listaCompra: ListaCompra): void  <------ en este método vamos a fusionar las dos listas de las compras.

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

  // Este metodo no comprueba si esta duplicado el item que se añade.

  //   agregarItemAListaDeCompra(item: ItemSupermercado) {
  //
  //     return this.compra.push(item);
  //   }

  // Este si verifica si ya existe en la lista.

  agregarItemAListaDeCompra(item: ItemSupermercado) {

    if (this.compra.includes(item)) {
      console.log(item.nombre + ' ya esta en la lista');
    } else {
      this.compra.push(item);
    }
    return this.compra;
  }

  vaciarListaDeLaCompra() {
    return this.compra = [];
  }

  mostrarLista() {
    for (let i = 0; i < this.compra.length; i++) {
      console.log(this.compra[i]);
    }
  }

  eliminarAlimentosQueEngordan() {
    this.compra = this.compra.filter(compra => compra.esSaludable());
  }

  dameTodosLosItemsConPrecioMenorA(precio: number): ItemSupermercado[] {

    return this.compra.filter(precioItem => precioItem.precio < precio);
  }

  eliminarAlimentosSanos() {
    return this.compra = this.compra.filter(compra => !compra.esSaludable());
  }

  // eliminarItemDeLista(item: ItemSupermercado): ItemSupermercado {

  // }

  fusionarCompras(listaCompra: ListaCompra2) {
    this.compra = this.compra.concat(listaCompra);
  }

}
