// Importación de módulos en JavaScript

// Importamos las funciones, constante y clase del módulo 'export-modules.js'
import { saludar, despedirse, PI, Circulo } from './28-export-modules.js';

// Utilizamos la función saludar
console.log(saludar("Mundo")); // Output: Hola, Mundo!

// Utilizamos la función despedirse
console.log(despedirse("Mundo")); // Output: Adiós, Mundo!

// Utilizamos la constante PI
console.log(PI); // Output: 3.14159

// Creamos una instancia de la clase Circulo y utilizamos sus métodos
const miCirculo = new Circulo(5);
console.log(miCirculo.area()); // Output: 78.53975
console.log(miCirculo.circunferencia()); // Output: 31.4159

// Resumen: Este código importa funciones, una constante y una clase desde otro módulo y las utiliza para mostrar saludos, despedidas, el valor de PI y calcular el área y la circunferencia de un círculo.