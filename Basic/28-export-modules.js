// Exportacion de módulos en JavaScript

// Definimos una función para saludar
export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

// Definimos una función para despedirse
export function despedirse(nombre) {
  return `Adiós, ${nombre}!`;
}

// Definimos una constante para el valor de PI
export const PI = 3.14159;

// Definimos una clase para representar un círculo
export class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  area() {
    return PI * this.radio * this.radio;
  }

  circunferencia() {
    return 2 * PI * this.radio;
  }

}

// Resumen: Este módulo exporta funciones, una constante y una clase que pueden ser utilizadas en otros archivos JavaScript mediante la importación.