import {Component} from '@angular/core';
import {Cuenta} from "./ejercicios/cuenta";
import {Guerrero} from "./ejercicios/guerrero";
import {Familia} from "./ejercicios/familia";
import {Arena} from "./ejercicios/arena";
import {Persona} from "./ejercicios/persona";
import {Rombo} from "./ejercicios/rombo";
import {Libro} from "./ejercicios/libro";
import {PersonaImc} from "./ejercicios/personaImc";

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
    const personaImc1 = new PersonaImc('Mara', 26, 29452991, '5', 63, 1.68);

    console.log('El imc de ' + personaImc1.nombre + ' es ' + personaImc1.calcularIMC())
    console.log('Valor peso ideal ' + personaImc1.pesoIdeal());
    console.log(personaImc1.valorImc());
    console.log('Es mayor de edad: ' + personaImc1.mayorDeEdad());
    console.log('Ha introducido un genero correcto? ' + personaImc1.comprobarGenero());
    console.log(personaImc1.toStringPersona());
  }
}
