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

// Vamos a Seguir ampliando la clase ListaCompra:
//
// calculaPrecioTotal(): number <------ método que devuelve la suma de todos los artículos

// dameTodosLosItemsSaludablesConPrecioMenorA(precio:number): itemSupermercado[] <------ devuelve todos los items
// saludables y que además no superen cierto precio

// aplicaDescuentoSobreItemsSaludables(descuento: number): void <------ a todos los items saludables, les va a aplicar
// un descuento (modificando el precio del item) , debemos controlar que no hagamos Descuentos ni inferiores al 0% ni
// superiores al 100%.
// En ambos casos, mostramos Error por consola https://developer.mozilla.org/es/docs/Web/API/Console/error

// aplicaSobreCosteAItemsQueEngordan(sobreCoste: number): void <------ sumamos el sobre coste a todos los elementos que
// NO son saludables.

// ordenaListaPorPrecio():void <------ Ordena la Lista de la compra por el precio de Menor a Mayor.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// nueva version de "aplicaSobreCosteAItemsQueEngordan(sobreCoste: number)"
//
//  Ahora, NO QUIERO que se modifica la lista original, quiero crear otra con el sobre coste aplicado
//
//  PISTA:
//
//  Usar el método filter map
//
// Ejemplo de un método que usa filter y map.
//
// El siguiente método va a hacer 2 cosas,
//
// primero va a filtrar los elementos mayores que 10.
// luego los elementos que han pasado el filtro, los va a devolver multiplicado por 2.
//
//
//
//   pruebaMap(): number[] {
//     const miMapa: number[] = [1,2,3,4,5,6,15,20]
//
//     const miMapaConTodosLosNumerosDuplicadosExceptoLosMayoresDe10: number[] =
//     miMapa.filter(numberAEliminar=>{
//       return numberAEliminar<10;
//     }).map(numberDelMapa=>{
//       return numberDelMapa*2;
//     })
//
//     return miMapaConTodosLosNumerosDuplicadosExceptoLosMayoresDe10;
//   }


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

  agregarItemAListaDeCompra(item: ItemSupermercado): ItemSupermercado[] {
    if (this.compra.includes(item)) {
      console.log(item.nombre + ' ya esta en la lista');
    } else {
      this.compra.push(item);
    }
    return this.compra;
  }

  vaciarListaDeLaCompra(): ItemSupermercado[] {
    return this.compra = [];
  }

  mostrarLista(): void {
    for (let i = 0; i < this.compra.length; i++) {
      console.log(this.compra[i]);
    }
  }

  eliminarAlimentosQueEngordan(): ItemSupermercado[] {
    return this.compra = this.compra.filter(compra => compra.esSaludable());
  }

  dameTodosLosItemsConPrecioMenorA(precio: number): ItemSupermercado[] {
    return this.compra.filter(precioItem => precioItem.precio < precio);
  }

  eliminarAlimentosSanos(): void {
    this.compra = this.compra.filter(compra => !compra.esSaludable());
  }

  eliminarItemDeLista(item: ItemSupermercado): ItemSupermercado {
    let indice = this.compra.indexOf(item);
    this.compra.splice(indice, 1);
    return item;
  }

  fusionarCompras(listaCompra: ListaCompra2): void {
    this.compra = this.compra.concat(listaCompra.compra);
  }

  calculaPrecioTotal(): number {
    let precioTotal = 0;

    for (let i = 0; i < this.compra.length; i++) {
      precioTotal = precioTotal + this.compra[i].precio;
    }
    return precioTotal;
  }

  dameTodosLosItemsSaludablesConPrecioMenorA(precio: number): ItemSupermercado[] {
    return this.compra.filter(compra => compra.esSaludable() && compra.precio < precio);
  }

  aplicaDescuentoSobreItemsSaludables(descuento: number): void {
    let itemsSaludables = this.compra.filter(compra => compra.esSaludable());

    if (descuento <= 0 || descuento >= 100) {
      console.error('Porcentaje de descuento erroneo, ha indicado ', descuento + ' %');
    } else {
      for (let i = 0; i < itemsSaludables.length; i++) {
        itemsSaludables[i].precio = itemsSaludables[i].precio - itemsSaludables[i].precio * (descuento / 100);
      }
    }
  }

  // Este metodo modifica la lista original.

  // aplicaSobreCosteAItemsQueEngordan(sobreCoste: number) {
  // let itemsNoSaludables = this.eliminarAlimentosSanos();

  // for (let i = 0; i < itemsNoSaludables.length; i++) {
  // itemsNoSaludables[i].precio = itemsNoSaludables[i].precio + itemsNoSaludables[i].precio * (sobreCoste / 100);
  // }
  // }

  // Este metodo no modifica la lista original.

  aplicaSobreCosteAItemsQueEngordan(sobreCoste: number): ItemSupermercado[] {

    return this.compra.filter(items => {
      return items.calorias > 300;
    }).map(itemsCopia => {
      let itemNuevo = new ItemSupermercado(itemsCopia.nombre, 0, itemsCopia.calorias);
      console.log('antes de la asignacion de sobre coste')
      console.log(itemsCopia.precio);
      itemNuevo.precio = itemsCopia.precio + itemsCopia.precio * (sobreCoste / 100);
      console.log('despues de la asignacion de sobre coste');
      console.log(itemsCopia.precio);
      console.log(itemNuevo.precio);
      return itemNuevo;
    });
  }

  ordenaListaPorPrecio(): void {
    this.compra.sort((a, b) => a.precio - b.precio);
  }

}


