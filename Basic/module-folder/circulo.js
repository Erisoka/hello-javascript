// Clase para representar un círculo
export class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
  circunferencia() {
    return 2 * Math.PI * this.radio;
  }
}