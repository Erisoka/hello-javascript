// Funciones en JavaScript

// Declaración de una función
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Llamada a la función
console.log(saludar("Mundo")); // Output: Hola, Mundo!

// Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // Output: 8

// Función anónima asignada a una variable
const multiplicar = function(x, y) {
    return x * y;
};
console.log(multiplicar(4, 7)); // Output: 28

// Función flecha (arrow function)
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Output: 5

// Función con valor por defecto
function potencia(base, exponente = 2) {
    return Math.pow(base, exponente);
}
console.log(potencia(3)); // Output: 9
console.log(potencia(2, 3)); // Output: 8

// Función que utiliza rest parameters
function sumarTodos(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(sumarTodos(1, 2, 3, 4, 5)); // Output: 15

// Función que devuelve otra función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}
const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // Output: 10

// Función autoejecutable
(function() {
    console.log("Esta función se ejecuta inmediatamente!");
})();

// Función recursiva
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Uso de funciones como callbacks
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

// Manejo de errores en funciones
function dividirSeguro(a, b) {
    if (b === 0) {
        console.error("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

console.log(dividirSeguro(10, 0)); // Output: Error: No se puede dividir por cero. null
console.log(dividirSeguro(10, 2)); // Output: 5

// Ejemplo de función con closure
function contador() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
}

const miContador = contador();
console.log(miContador()); // Output: 1
console.log(miContador()); // Output: 2

// forEach con función callback
numeros.forEach(function(num) {
    console.log(`Número: ${num}`);
}); // Output: Número: 1 ... Número: 5

numeros.forEach(num => {
    console.log(`Número: ${num}`);
}); // Output: Número: 1 ... Número: 5

numeros.forEach(num => console.log(`Número: ${num}`)); // Output: Número: 1 ... Número: 5

mySet = new Set([1, 2, 3]);
mySet.forEach(function(value) {
    console.log(`Valor del Set: ${value}`);
}); // Output: Valor del Set: 1 ... Valor del Set: 3

mySet.forEach(value => {
    console.log(`Valor del Set: ${value}`);
}); // Output: Valor del Set: 1 ... Valor del Set: 3

mySet.forEach(value => console.log(`Valor del Set: ${value}`)); // Output: Valor del Set: 1 ... Valor del Set: 3

myMap = new Map([[1, 'uno'], [2, 'dos'], [3, 'tres']]);
myMap.forEach(function(value, key) {
    console.log(`Clave: ${key}, Valor: ${value}`);
}); // Output: Clave: 1, Valor: uno ... Clave: 3, Valor: tres

myMap.forEach((value, key) => {
    console.log(`Clave: ${key}, Valor: ${value}`);
}); // Output: Clave: 1, Valor: uno ... Clave: 3, Valor: tres

myMap.forEach((value, key) => console.log(`Clave: ${key}, Valor: ${value}`)); // Output: Clave: 1, Valor: uno ... Clave: 3, Valor: tres

// Exportar funciones (si se usa en un entorno de módulos)
export { saludar, sumar, multiplicar, dividir, potencia, sumarTodos, crearMultiplicador, factorial };

// Importar funciones (si se usa en un entorno de módulos)
// import { saludar, sumar } from './16-functions.js';

// Fin del archivo 16-functions.js