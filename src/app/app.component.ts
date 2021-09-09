import {Component} from '@angular/core';
import {Cuenta} from "./ejercicios/cuenta";
import {Guerrero} from "./ejercicios/guerrero";
import {Familia} from "./ejercicios/familia";
import {Arena} from "./ejercicios/arena";
import {Persona} from "./ejercicios/persona";
import {Rombo} from "./ejercicios/rombo";
import {Libro} from "./ejercicios/libro";
import {PersonaImc} from "./ejercicios/personaImc";
import {CuentaJoven} from "./ejercicios/cuentaJoven";
import {PersonaConCuentaJoven} from "./ejercicios/personaConCuentaJoven";
import {PreguntaDeTest} from "./ejercicios/preguntaDeTest";
import {TestExamenFinal} from "./ejercicios/testExamenFinal";
import {ListaCompra} from "./ejercicios/listaCompra";
import {ItemSupermercado} from "./ejercicios/itemSupermercado";
import {ListaCompra2} from "./ejercicios/listaCompra2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicios';

  constructor() {
    console.log('esto es el constructor de app.component');


    // ejercicio familia y persona
    const jose = new Persona('jose');
    const encarni = new Persona('encarni');
    const david = new Persona('david');
    const enrique = new Persona('enrique');

    const fernando = new Persona('fernando');
    const adela = new Persona('adela');
    const jorge = new Persona('jorge');
    const armando = new Persona('armando');

    enrique.obtenerEdad(1932);
    encarni.obtenerEdad(1948);

    fernando.obtenerEdad(1977);
    adela.obtenerEdad(1979);
    jorge.obtenerEdad(2012);
    armando.obtenerEdad(1968);

    const familia1 = new Familia(jose, encarni, david, enrique);
    const familia2 = new Familia(fernando, adela, jorge, armando);

    console.log('La edad del abuelo es ' + familia1.abueloEdad() + ' años');
    console.log(familia1.quienEsMayor());
    console.log(familia1.mediaEdad());
    console.log(familia2.mediaEdad());
    console.log()

    // ejercicio arena y guerrero
    const guerrero1 = new Guerrero('Invencible', 50);
    const guerrero2 = new Guerrero('Depredador', 50);

    console.log(new Arena().resultadoBatalla(guerrero1, guerrero2));
    console.log('El nombre del guerrero es ' + guerrero1.nombre);
    console.log('El nivel de ataque del guerrero es ' + guerrero2.nivelAtaque);


    // ejercicio cuenta
    const cuenta = new Cuenta('Ana');
    const cuenta2 = new Cuenta('Luis', 2598);

    const p = cuenta.titular;
    cuenta.titular = 'titular de la cuenta';

    console.log('El saldo de la cuenta es ' + cuenta.ingresar(4) + ' euros');
    console.log('El saldo de la cuenta es ' + cuenta.ingresar(5) + ' euros');
    console.log('El saldo de la cuenta es ' + cuenta.ingresar(-1) + ' euros');

    console.log('El saldo de la cuenta es ' + cuenta.retirar(2) + ' euros');
    console.log('El saldo de la cuenta es ' + cuenta.retirar(10) + ' euros');
    console.log('El titular de la cuenta es ' + p);
    console.log(cuenta2);

    // ejercicio rombo
    const rombo1 = new Rombo(50, 20);

    console.log('El area del rombo es ' + rombo1.calculoArea());

    // ejercicio libro
    const libro1 = new Libro(52, 'El desencuentro', 'Fernando Schwartz', 180);
    const libro2 = new Libro(63, 'La torre oscura', 'Stephen King', 218);

    console.log(libro1);
    console.log(libro2);
    console.log(libro1.mayorNumeroPaginas(libro1, libro2));

    // ejercicio personaImc
    const personaImc1 = new PersonaImc('Mara', 26, 29452991, 'M', 63, 1.68);

    console.log('El imc de ' + personaImc1.nombre + ' es ' + personaImc1.calcularIMC())
    console.log('Valor peso ideal ' + personaImc1.pesoIdeal());
    console.log(personaImc1.valorImc());
    console.log('Es mayor de edad: ' + personaImc1.mayorDeEdad());
    console.log('Ha introducido un genero correcto? ' + personaImc1.comprobarGenero());
    console.log(personaImc1.toStringPersona());

    // ejercicio cuenta joven
    const cuentaJoven1 = new CuentaJoven('Ana', 21, 44895362, 80);
    const cuentaJoven2 = new CuentaJoven('Luis', 15, 26354891, 30);
    const cuentaJoven3 = new CuentaJoven('Sonia', 31, 25369745, 120);

    console.log(cuentaJoven1.esTitularValido());
    console.log(cuentaJoven2.esTitularValido());
    console.log(cuentaJoven3.esTitularValido());
    console.log(cuentaJoven1.retirar(20));
    console.log(cuentaJoven2.retirar(10));
    console.log(cuentaJoven3.retirar(135));
    console.log(cuentaJoven1.mostrar());
    console.log(cuentaJoven2.mostrar());
    console.log(cuentaJoven2.ingresar(1500));
    console.log(cuentaJoven2.mostrar());
    console.log(cuentaJoven3.mostrar());
    console.log(cuentaJoven3.ingresar(3800));
    console.log(cuentaJoven3.mostrar());

    // ejercicio persona con cuenta joven

    const cuentaJoven4 = new CuentaJoven('Ana', 22, 58963124, 100);
    const cuentaJoven5 = new CuentaJoven('Luis', 41, 58963124, 100);
    const personaConCuentaJoven1 = new PersonaConCuentaJoven('Ana', 25, cuentaJoven4);
    const personaConCuentaJoven2 = new PersonaConCuentaJoven('Luis', 41, cuentaJoven5);

    console.log(personaConCuentaJoven1.titularValidoMostrarRetirar(50));
    console.log(personaConCuentaJoven2.titularValidoMostrarRetirar(500));

    // ejercicio pregunta de test

    const preguntaDeTest1 = new PreguntaDeTest('Liquido que necesita todo ser vivo para sobrevivir?',
      'cerveza', 'agua', 'vino', 'barro', 'opcion 2');

    console.log(preguntaDeTest1.responder('opcion 2'));
    console.log(preguntaDeTest1.responder('agua'));
    console.log(preguntaDeTest1.mostrarPorConsola());

    // ejercicio test examen final

    const preguntaDeTest2 = new PreguntaDeTest('Quien dominara el mundo?', 'gato', 'perro',
      'oveja', 'cucaracha', 'opcion 1');
    const preguntaDeTest3 = new PreguntaDeTest('Sin que no se puede vivir?', 'vacaciones',
      'cerveza', 'aire', 'dinero', 'opcion 3');
    const preguntaDeTest4 = new PreguntaDeTest('Como se llama el puto gato?', 'gallifrey',
      'michi', 'arnoldo', 'minino', 'opcion 1');
    const preguntaDeTest5 = new PreguntaDeTest('Que genero de peliculas no te deja dormir por las noches?',
      'terror', 'ciencia ficción', 'comedia', 'thriller', 'opcion 1');
    const preguntaDeTest6 = new PreguntaDeTest('Cual tiene mayor dureza?', 'carbon', 'diamante',
      'onix', 'lapislazu', 'opcion 2');
    const testExamenFinal1 = new TestExamenFinal(preguntaDeTest1, preguntaDeTest2, preguntaDeTest3, preguntaDeTest4,
      preguntaDeTest5, preguntaDeTest6);

    console.log(testExamenFinal1.mostrarExamen());
    console.log(testExamenFinal1.responderExamen('opcion 2', 'opcion 1', 'opcion 3',
      'opcion 1', 'opcion 1', 'opcion 2'));
    console.log(testExamenFinal1.responderExamen('opcion 2', 'opcion 1', 'opcion 3',
      'opcion 1', 'opcion 2', 'opcion 2'));
    console.log(testExamenFinal1.responderExamen('opcion 2', 'opcion 3', 'opcion 3',
      'opcion 1', 'opcion 4', 'opcion 2'));
    console.log(testExamenFinal1.responderExamen('opcion 1', 'opcion 1', 'opcion 3',
      'opcion 2', 'opcion 5', 'opcion 2'));
    console.log(testExamenFinal1.responderExamen('opcion 1', 'opcion 2', 'opcion 3',
      'opcion 3', 'opcion 2', 'opcion 2'));

    // ejercicio lista de la compra

    const listaCompra1 = new ListaCompra(['manzanas', 'suavizante', 'tofu']);

    console.log('lista incial');
    console.log(listaCompra1.mostrarListaSimplemente());
    console.log('aqui añadimos un item a la lista');
    listaCompra1.agregarItemAListaDeCompra('tomate frito');
    listaCompra1.agregarItemAListaDeCompra('leche');
    console.log('aqui mostramos la lista');
    console.log(listaCompra1.mostrarListaSimplemente());
    console.log('lista vacia');
    console.log(listaCompra1.vaciarListaDeLaCompra());

    console.log('aqui tendrian que salir los componentes de la lista');
    listaCompra1.agregarItemAListaDeCompra('salsa brava');
    listaCompra1.agregarItemAListaDeCompra('queso');
    listaCompra1.agregarItemAListaDeCompra('cafe');
    console.log(listaCompra1.mostrarListaSimplemente());
    listaCompra1.mostrarLista();

    // ejercicio item supermercado

    let itemSupermercado1 = new ItemSupermercado('tomate frito', 1.2, 342);
    let itemSupermercado2 = new ItemSupermercado('brocoli', 2, 45);
    let itemSupermercado3 = new ItemSupermercado('manzana', 1, 80);
    let listaCompra3 = new ListaCompra2([itemSupermercado1, itemSupermercado2]);

    console.log(itemSupermercado1.esSaludable());
    console.log(itemSupermercado2.esSaludable());
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado3);
    listaCompra3.mostrarLista();
    listaCompra3.vaciarListaDeLaCompra();
    console.log('lista vacia');
    console.log(listaCompra3);
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado3);
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado2);
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado1);
    listaCompra3.mostrarLista();
    listaCompra3.eliminarAlimentosQueEngordan();
    listaCompra3.mostrarLista();
    console.log('mostrar items inferiores a precio');
    console.log(listaCompra3.dameTodosLosItemsConPrecioMenorA(1.5));

    // primera ampliación ejercicio lista compra

    let itemSupermercado4 = new ItemSupermercado('pera', 3, 60);
    let itemSupermercado5 = new ItemSupermercado('arroz', 2.3, 160);
    let itemSupermercado6 = new ItemSupermercado('ternera', 15.5, 260);
    let listaCompra4 = new ListaCompra2([itemSupermercado5, itemSupermercado6]);

    console.log('a partir de aqui primera extensión clase');
    console.log(listaCompra3.dameTodosLosItemsConPrecioMenorA(2));
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado4);
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado2);
    listaCompra3.mostrarLista();
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado1);
    console.log(listaCompra3.eliminarAlimentosSanos());
    console.log('concat');
    listaCompra3.fusionarCompras(listaCompra4);
    listaCompra3.mostrarLista();
    console.log('eliminar item');
    listaCompra3.eliminarItemDeLista(itemSupermercado5);
    listaCompra3.mostrarLista();

    // segunda ampliación ejercicio lista compra

    let itemSupermercado7 = new ItemSupermercado('garbanzos', 2, 80);
    let itemSupermercado8 = new ItemSupermercado('galletas chocolate', 2, 410);
    let listaCompra5 = new ListaCompra2([itemSupermercado2, itemSupermercado3, itemSupermercado4, itemSupermercado5]);

    console.log('a partir de aqui segunda extensión clase');
    console.log(listaCompra3.calculaPrecioTotal());
    listaCompra3.mostrarLista();
    console.log(listaCompra3.dameTodosLosItemsSaludablesConPrecioMenorA(50));
    console.log('despues de hacer saludables precio menor a');
    listaCompra3.mostrarLista();
    listaCompra3.aplicaDescuentoSobreItemsSaludables(102);
    listaCompra3.mostrarLista();
    console.log('aqui se aplica el sobre coste');
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado8);
    listaCompra3.aplicaSobreCosteAItemsQueEngordan(50);
    console.log('enseña la lista');
    listaCompra3.mostrarLista();
    console.log('ordenar lista por precio');
    listaCompra3.agregarItemAListaDeCompra(itemSupermercado7);
    listaCompra3.mostrarLista();
    listaCompra3.ordenaListaPorPrecio();
    listaCompra3.mostrarLista();

    // en el AppComponent, quiero que hagas el siguiente método:
    //
    // queListaEsMasSaludable(listaCompra1: ListaCompra,listaCompra2: ListaCompra): ListaCompra <---------- devuelve la
    // lista con más elementos saludables.

    // queListaEsMasBarata(listaCompra1: ListaCompra,listaCompra2: ListaCompra): ListaCompra <---------- devuelve la
    // lista más barata.

    function queListaEsMasSaludable(listaCompra1: ListaCompra2, listaCompra2: ListaCompra2) {
      let contadorLista1 = 0;
      let contadorLista2 = 0;

      for (let i = 0; i < listaCompra1.compra.length; i++) {
        contadorLista1 = contadorLista1 + 1;
      }

      for (let i = 0; i < listaCompra2.compra.length; i++) {
        contadorLista2 = contadorLista2 + 1;
      }

      if (contadorLista1 > contadorLista2) {
        console.log(listaCompra1);
      }
      if (contadorLista1 < contadorLista2) {
        console.log(listaCompra2);
      }
      if (contadorLista1 == contadorLista2) {
        console.log('Las 2 listas son igual de saludables');
      }
    }

    function queListaEsMasBarata(listaCompra1: ListaCompra2, listaCompra2: ListaCompra2) {
      let totalLista1 = 0;
      let totalLista2 = 0;

      for (let i = 0; i < listaCompra1.compra.length; i++) {
        totalLista1 = totalLista1 + listaCompra1.compra[i].precio;
      }

      for (let i = 0; i < listaCompra2.compra.length; i++) {
        totalLista2 = totalLista2 + listaCompra2.compra[i].precio;
      }

      if (totalLista1 > totalLista2) {
        console.log(listaCompra2);
      }
      if (totalLista1 < totalLista2) {
        console.log(listaCompra1);
      }
      if (totalLista1 == totalLista2) {
        console.log('Las 2 listas tienen el mismo total');
      }
    }

    console.log('funciones en app.component');

    queListaEsMasSaludable(listaCompra3, listaCompra4);
    queListaEsMasSaludable(listaCompra3, listaCompra5);
    queListaEsMasBarata(listaCompra3, listaCompra4);
    queListaEsMasBarata(listaCompra3, listaCompra5);

  }
}
