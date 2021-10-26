// vamos a hacer la clase "Hacendado", "AlCampo" y Carrefour
//
// Las tres van a tener un método que se llama "procesaLista(listaCompra: ListaCompra2): number" que va a devolver el
// precio de una listaDeCompra en base a distintos criterios.
//
// procesaLista(listaCompra: ListaCompra2): number   VERSION Carrefour
//
// si   un ItemDeSupermercado es de la marca 'Carrefour' entonces se aplica un descuente de un 5%
// si.  un ItemDeSupermercado contiene el ingrediente 'hierro' entonces aplicamos un sobre coste a ese item del 2%

import {ListaCompra3} from "./listaCompra3";
import {ItemSupermercado} from "./itemSupermercado";
import {ItemSupermercado2} from "./itemSupermercado2";

export class ListaCompraCarrefour {

  procesaLista(listaCompra: ListaCompra3): void {

    for (let i = 0; i < listaCompra.compra.length; i++) {

      // Comprobación marca

      if (listaCompra.compra[i].comprobacionMarca() === 'C') {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio - listaCompra.compra[i].precio * (5 / 100);
      }

      // Comprobación hierro

      if (listaCompra.compra[i].contineHierro()) {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio + listaCompra.compra[i].precio * (2 / 100);
      }

    }
  }

  procesaLista2(listaCompra: ListaCompra3): number[] {
    return listaCompra.compra.filter(items => {
      return items.marca === 'Carrefour';
    }).map(itemsMarca => {
      return itemsMarca.precio = itemsMarca.precio - itemsMarca.precio * (5 / 100)
    })
  }

 /* aplicaSobreCosteAItemsQueEngordan(sobreCoste: number): ItemSupermercado[] {

    return this.compra.filter(items => {
      return items.calorias > 300;
    }).map(itemsCopia => {
      let itemNuevo = new ItemSupermercado(itemsCopia.nombre, 0, itemsCopia.calorias);

      itemNuevo.precio = itemsCopia.precio + itemsCopia.precio * (sobreCoste / 100);

      return itemNuevo;
    });
  }*/

}
