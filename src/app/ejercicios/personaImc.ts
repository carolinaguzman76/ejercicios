// Haz una clase llamada Persona que siga las siguientes condiciones:
//
// Sus atributos son:
// nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. No queremos que se accedan directamente a ellos (get y set).
//
//
// Piensa que modificador de acceso es el más adecuado, también su tipo
// Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena vacía para String, etc.). Sexo sera hombre por defecto, usa una constante para ello.
//
// Se implantaran varios constructores:
// Un constructor con todos los atributos como parámetro.
//
// Los métodos que se implementaran son:
// calcularIMC():
// calculara si la persona esta en su peso ideal (peso/(altura^2)), si esta fórmula devuelve un valor menor que 20, la función devuelve un -1, si devuelve un número entre 20 y 25 (incluidos),
// significa que esta por debajo de su peso ideal la función devuelve un 0  y si devuelve un valor mayor que 25 significa que tiene sobrepeso, la función devuelve un 1.
//
// esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
//
// comprobarSexo(char sexo): comprueba que el sexo introducido es correcto (es decir, que sea H o M). Si no es correcto, devuelve false
//
// toString(): devuelve toda la información del objeto.

import {findFirstMatchingNode} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";

export class PersonaImc {
  public nombre: string;
  private edad: number;
  private DNI: number;
  private sexo: string;
  private peso: number;
  private altura: number;

  constructor(nombre: string, edad: number, DNI: number, sexo: string, peso: number, altura: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC(): number {
    const peso = this.peso;
    const altura = this.altura;
    let cuadradoAltura = altura * altura;

    return peso / cuadradoAltura;
  }

  pesoIdeal(): number {
    const imc = this.calcularIMC();
    let resultadoImc = 0;

    if (imc < 20) {
      resultadoImc = -1;
    }
    if (imc > 25) {
      resultadoImc = 1;
    }
    if (imc >= 20 && imc >= 25) {
      resultadoImc = 0;
    }
    return resultadoImc;
  }

  valorImc(): string {
    const valorImc = this.pesoIdeal();
    let resultadoValor = '';

    if (valorImc === -1) {
      resultadoValor = 'Esta por debajo de su peso ideal'
    }
    if (valorImc === 1) {
      resultadoValor = 'Tiene sobrepeso';
    }
    if (valorImc === 0) {
      resultadoValor = 'Esta en un rango de peso ideal';
    }
    return resultadoValor;
  }

  mayorDeEdad(): boolean {
    const edad = this.edad;

    if (edad > 17) {
      return true;
    } else {
      return false;
    }
  }

  comprobarGenero(): boolean {
    const sexo = this.sexo;

    if (sexo == 'M' || 'H') {
      return true;
    } else {
      return false;
    }
  }

  toStringPersona() {
    const datos = this;

    return datos;
  }
}


