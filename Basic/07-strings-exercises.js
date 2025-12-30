/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let cadena1 = "Hola"
let cadena2 = "Mundo"
let concatenacion = cadena1 + " " + cadena2
console.log(concatenacion)

// 2. Muestra la longitud de una cadena de texto
let cadena3 = "JavaScript"
console.log("Longitud de la cadena:", cadena3.length)

// 3. Muestra el primer y último carácter de un string
let cadena4 = "Hola"
console.log("Primer carácter:", cadena4.charAt(0))
console.log("Último carácter:", cadena4.charAt(cadena4.length - 1))

// 4. Convierte a mayúsculas y minúsculas un string
let cadena5 = "Hola Mundo"
console.log("Mayúsculas:", cadena5.toUpperCase())
console.log("Minúsculas:", cadena5.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadena6 = `Esta es una cadena
que abarca
múltiples líneas.`
console.log(cadena6)

// 6. Interpola el valor de una variable en un string

let nombre = "Leonidas"
let edad = 44
let mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`
console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena7 = "Hola Mundo"
console.log("Reemplazando espacios por guiones:", cadena7.replace(/ /g, "-")) // Usando expresión regular con bandera 'g' para reemplazar todos

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let cadena8 = "Hola Mundo"
console.log("Contiene 'Mundo':", cadena8.includes("Mundo"))
console.log("Contiene 'JavaScript':", cadena8.includes("JavaScript"))

// 9. Comprueba si dos strings son iguales
let cadena9a = "Hola"
let cadena9b = "Hola"
console.log("Son iguales:", cadena9a === cadena9b)

// 10. Comprueba si dos strings tienen la misma longitud
let cadena10a = "Hola"
let cadena10b = "Mundo"
console.log("Misma longitud:", cadena10a.length === cadena10b.length)