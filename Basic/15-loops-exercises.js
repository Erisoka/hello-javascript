/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
/* for (let i = 1; i <= 20; i++) {
    console.log(i)
} */

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
/* let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log("Suma del 1 al 100:", suma) */

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
/* for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Número par:", i)
    }
} */

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
/* let nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"]
for (let i = 0; i < nombres.length; i++) {
    console.log("Nombre:", nombres[i])
}
 */

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
/* let texto = "Hola, este es un ejercicio para contar vocales."
let contadorVocales = 0
let vocales = "aeiouAEIOU"
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contadorVocales++
    }
}
console.log("Número de vocales en el texto:", contadorVocales) */

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
/* let numeros = [1, 2, 3, 4, 5]
let producto = 1
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i]
}
console.log("Producto de los números:", producto) */

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/* for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
} */

// 8. Usa un bucle para invertir una cadena de texto
/* let cadena = "JavaScript"
let cadenaInvertida = ""
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i]
}
console.log("Cadena invertida:", cadenaInvertida) */

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
/* let fibo = [0, 1]
for (let i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log("Primeros 10 números de Fibonacci:", fibo) */

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray = [4, 11, 15, 3, 22, 7, 9, 13]
let mayoresA10 = []
for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] > 10) {
        mayoresA10.push(numerosArray[i])
    }
}
console.log("Números mayores a 10:", mayoresA10)