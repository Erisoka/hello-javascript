// 4. Importa una función
import { saludar } from './31-modules-exercises.js';
console.log(saludar("Mundo")); // Output: Hola, Mundo!

// 5. Importa una constante
import { PI } from './31-modules-exercises.js';
console.log(PI); // Output: 3.14159

// 6. Importa una clase
import { Circulo } from './31-modules-exercises.js';
const miCirculo = new Circulo(5);
console.log(miCirculo.area()); // Output: 78.53975
console.log(miCirculo.circunferencia()); // Output: 31.4159

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import CirculoDefault from './31-modules-exercises.js';
const miCirculoDefault = new CirculoDefault(7);
console.log(miCirculoDefault.area()); // Output: 153.93804002589985
console.log(miCirculoDefault.circunferencia()); // Output: 43.982297150257104
console.log(miCirculoDefault.perimetro()); // Output: 43.982297150257104

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { saludar as saludarDesdeCarpeta } from './module-folder/saludar.js';
import { PI as PIDesdeCarpeta } from './module-folder/constants.js';
import { Circulo as CirculoDesdeCarpeta } from './module-folder/circulo.js';

console.log(saludarDesdeCarpeta("Mundo desde carpeta")); // Output: Hola, Mundo desde carpeta!
console.log(PIDesdeCarpeta); // Output: 3.14159

const miCirculoDesdeCarpeta = new CirculoDesdeCarpeta(10);
console.log(miCirculoDesdeCarpeta.area()); // Output: 314.1592653589793
console.log(miCirculoDesdeCarpeta.circunferencia()); // Output: 62.83185307179586