import {Component} from '@angular/core';
import {Cuenta} from "./ejercicios/cuenta";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicios';

  constructor() {
    console.log('esto es el constructor de app.component');

    const cuenta = new Cuenta('Ana');
    const cuenta2 = new Cuenta('Luis', 2598);

    const p = cuenta.titular;
    cuenta.titular = 'titular de la cuenta';

    console.log(cuenta.ingresar(4));
    console.log(cuenta.ingresar(5));
    console.log(cuenta.ingresar(-1));

    console.log(cuenta.retirar(2));
    console.log(cuenta.retirar(10));
  }
}
