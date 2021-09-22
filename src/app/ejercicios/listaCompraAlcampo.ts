// vamos a hacer la clase "Hacendado", "AlCampo" y Carrefour
//
// Las tres van a tener un método que se llama "procesaLista(listaCompra: ListaCompra2): number" que va a devolver el
// precio de una listaDeCompra en base a distintos criterios.
//
// procesaLista(listaCompra: ListaCompra2): number   VERSION ALCAMPO
//
// si   un ItemDeSupermercado ha expirado entonces lo eliminamos de la lista de entrada
// si   un ItemDeSupermercado está proximo a ser expirado (1 semana antes de la fecha de caducidad) hacemos un descuento
// del 10% a ese Item solamente.
// si   un ItemDeSupermercado es de la marca 'Alcampo' entonces se aplica un descuente de un 75%
// si   un ItemDeSupermercado es saludable, entonces aplicamos un descuento del 15%
// si   un ItemDeSupermercado NO es saludable, entonces aplicamos un sobrecoste del 15%

import {ListaCompra3} from "./listaCompra3";

export class ListaCompraAlcampo {


  procesaLista(listaCompra: ListaCompra3): void {

    for (let i = 0; i < listaCompra.compra.length; i++) {

      // Comprobación caducidad

      if (listaCompra.compra[i].comprobacionFechaCaducidad() == 'caducado') {
        let indice = listaCompra.compra.indexOf(listaCompra.compra[i]);

        listaCompra.compra.splice(indice, 1)
      }
      if (listaCompra.compra[i].comprobacionFechaCaducidad() == 'proxima caducidad') {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio - listaCompra.compra[i].precio * (10 / 100);
      }

      // Comprobación marca

      if (listaCompra.compra[i].comprobacionMarca() === 'A') {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio - listaCompra.compra[i].precio * (75 / 100);
      }

      // Comprobación saludable

      if (listaCompra.compra[i].esSaludable()) {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio - listaCompra.compra[i].precio * (15 / 100);
      } else {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio + listaCompra.compra[i].precio * (15 / 100);
      }

    }
  }
}
