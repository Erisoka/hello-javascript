/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

// 2. Exporta una constante

export const PI = 3.14159;

// 3. Exporta una clase
export class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
  circunferencia() {
    return 2 * PI * this.radio;
  }
} 

// 4. Importa una función (en archivo 32-import-modules-exercises.js)

// 5. Importa una constante (en archivo 32-import-modules-exercises.js)

// 6. Importa una clase (en archivo 32-import-modules-exercises.js)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default class Circulo2 {
  constructor(radio) {
    this.radio = radio;
  }
  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
  circunferencia() {
    return 2 * PI * this.radio;
  }
  perimetro() {
    return this.circunferencia();
  }
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita) (en archivo 32-import-modules-exercises.js)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
