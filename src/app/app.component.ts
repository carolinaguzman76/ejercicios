import {Component} from '@angular/core';
import {Cuenta} from "./ejercicios/cuenta";
import {Guerrero} from "./ejercicios/guerrero";
import {Familia} from "./ejercicios/familia";
import {Arena} from "./ejercicios/arena";
import {Persona} from "./ejercicios/persona";
import {Rombo} from "./ejercicios/rombo";

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
    console.log('El nombre del guerrero es ' + guerrero1._nombre);
    console.log('El nivel de ataque del guerrero es ' + guerrero2._nivelAtaque);


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
  }
}
