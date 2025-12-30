/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario de una línea

// 2. Escribe un comentario en varias líneas

/*
Esto es un comentario
de múltiples líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Este es un string"          // String
let myNumber = 123                           // Number
let myBoolean = false                        // Boolean

// 4. Imprime por consola el valor de todas las variables

console.log(myString);
console.log(myNumber);
console.log(myBoolean);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Otro string diferente"
myNumber = 456
myBoolean = true

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 789           // Ahora es un Number
myNumber = "Ahora soy un string" // Ahora es un String
myBoolean = null         // Ahora es Null

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myConstString = "Este es un string constante"
const myConstNumber = 123
const myConstBoolean = false

// 9. A continuación, modifica los valores de las constantes

// myConstString = "Nuevo valor" // Error
// myConstNumber = 456           // Error
// myConstBoolean = true         // Error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse