/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const sumar = (a, b) => a + b;
console.log(sumar(4, 6)); // Output: 10

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const encontrarMayor = (numeros) => Math.max(...numeros);
console.log(encontrarMayor([3, 5, 7, 2, 8])); // Output: 8

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const contarVocales = (cadena) => {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
};
console.log(contarVocales("Hola Mundo")); // Output: 4

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const convertirMayusculas = (strings) => strings.map(str => str.toUpperCase());
console.log(convertirMayusculas(["hola", "mundo"])); // Output: ["HOLA", "MUNDO"]

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const esPrimo = (num) => {
    if (!Number.isInteger(num) || num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(esPrimo(7)); // Output: true

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const elementosComunes = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
console.log(elementosComunes([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumarPares = (numeros) => numeros.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
console.log(sumarPares([1, 2, 3, 4, 5, 6])); // Output: 12

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const elevarCuadrado = (numeros) => numeros.map(n => n * n);
console.log(elevarCuadrado([1, 2, 3, 4])); // Output: [1, 4, 9, 16]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const invertirPalabras = (cadena) => cadena.split(" ").reverse().join(" ");
console.log(invertirPalabras("Hola Mundo")); // Output: "Mundo Hola"

// 10. Crea una función que calcule el factorial de un número dado
const factorial = (n) => {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120