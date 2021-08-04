export class PersonaImc {
  private nombre: string;
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


  // pesoIdeal(personaImc: PersonaImc) {
  // let imc = 0;
  //console.log('dentro funcion peso ideal');
  // console.log(personaImc);

  // calcularIMC(this.peso, this.altura): number {

  // let cuadradoAltura = this.altura * this.altura;

  // imc = this.peso / cuadradoAltura;

  // }
  // console.log(imc);
  //}
}
