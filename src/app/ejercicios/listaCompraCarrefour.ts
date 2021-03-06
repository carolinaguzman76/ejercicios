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
import {NombreSupermercado} from "./itemSupermercado2";

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

  procesaLista2(listaCompra: ListaCompra3): number {
    let totalLista = 0;
    let listaModificada = listaCompra.compra.map(itemsMarca => {
      let precioActualizado = itemsMarca.precio;
      if (itemsMarca.marca === NombreSupermercado.Carrefour) {
        precioActualizado = precioActualizado - precioActualizado * (5 / 100);
      } if (itemsMarca.contineHierro()) {
        precioActualizado = precioActualizado + precioActualizado * (2 / 100);
      }
      return precioActualizado;
    })
    for (let i = 0; i < listaModificada.length; i++ ) {
      totalLista = totalLista + listaModificada[i];
    }
    return totalLista;
  }



   //	MostrarDatosPeso(linea: LineaComanda) {
  // 		return linea.objArticulo.tipoVenta === TipoVentaArticulo.PESO;
  // 	}



}
