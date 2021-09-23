// vamos a hacer la clase "Hacendado", "AlCampo" y Carrefour
//
// Las tres van a tener un método que se llama "procesaLista(listaCompra: ListaCompra2): number" que va a devolver el
// precio de una listaDeCompra en base a distintos criterios.
//
// procesaLista(listaCompra: ListaCompra2): number   VERSION HACENDADO
//
// si.  un ItemDeSupermercado contiene el ingrediente 'hierro' entonces aplicamos un sobre coste a ese item de 1%
// si   un ItemDeSupermercado ha expirado entonces hacemos un descuento de ese item de un 100%
// si   un ItemDeSupermercado está proximo a ser expirado (1 semana antes de la fecha de caducidad) hacemos un descuente
// del 10% a ese Item solamente.
// si   un ItemDeSupermercado es de la marca 'Hacendado' entonces se aplica un descuente de un 25%
// si   un ItemDeSupermercado contiene 'instruccionesDeUso' hacemos un descuento del 5%

import {ListaCompra3} from "./listaCompra3";

export class ListaCompraHacendado {

  procesaLista(listaCompra: ListaCompra3): void {

    for (let i = 0; i < listaCompra.compra.length; i++) {

      // Comprobación hierro

      if (listaCompra.compra[i].contineHierro()) {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio + listaCompra.compra[i].precio * (1 / 100);
      }

      // Comprobación caducidad

      if (listaCompra.compra[i].comprobacionFechaCaducidad() == 'caducado') {
        listaCompra.compra[i].precio = 0;

      }
      if (listaCompra.compra[i].comprobacionFechaCaducidad() == 'proxima caducidad') {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio - listaCompra.compra[i].precio * (10 / 100);
      }

      // Comprobación marca

      if (listaCompra.compra[i].comprobacionMarca() === 'H') {
        listaCompra.compra[i].precio = listaCompra.compra[i].precio - listaCompra.compra[i].precio * (25 / 100);
      }

    }
  }
}
