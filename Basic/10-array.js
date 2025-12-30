// Array
let myArray = [] // Crear un array vacío
console.log("Array vacío:", myArray)

let fruits = ["manzana", "banana", "naranja"]
console.log(fruits[0]) // manzana
console.log(fruits[1]) // banana
console.log(fruits[2]) // naranja

// Añadir un elemento al final del array
fruits.push("uva")
console.log(fruits) // ["manzana", "banana", "naranja", "uva"]

// Eliminar el último elemento del array
fruits.pop()
console.log(fruits) // ["manzana", "banana", "naranja"]
fruits.shift() // Eliminar el primer elemento
console.log(fruits) // ["banana", "naranja"]
fruits.unshift("manzana") // Añadir un elemento al inicio
console.log(fruits) // ["manzana", "banana", "naranja"]
fruits = []  // Vaciar el array
fruits = ["manzana", "banana", "naranja"] // Restaurar el array

// Longitud del array
console.log(fruits.length) // 3

// Recorrer el array con un bucle for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Recorrer el array con for...of
for (let fruit of fruits) {
    console.log(fruit)
}

// Acceder al primer y último elemento
console.log("Primer elemento:", fruits[0])
console.log("Último elemento:", fruits[fruits.length - 1])

// Encontrar el índice de un elemento
let index = fruits.indexOf("banana")
console.log("Índice de banana:", index) // 1

// Verificar si un elemento existe en el array
let hasOrange = fruits.includes("naranja")
console.log("¿Contiene naranja?", hasOrange) // true

// Convertir array a string
let fruitsString = fruits.join(", ")
console.log("Fruits as string:", fruitsString) // "manzana, banana, naranja"

// Dividir un string en un array
let colorsString = "rojo, verde, azul"
let colorsArray = colorsString.split(", ")
console.log("Colors as array:", colorsArray) // ["rojo", "verde", "azul"]

// Crear un array multidimensional
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("Elemento en fila 2, columna 3:", matrix[1][2]) // 6

// Recorrer un array multidimensional
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

// Métodos avanzados: map, filter, reduce

// map lo que hace es crear un nuevo array aplicando una función a cada elemento del array original
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map(num => num * 2)
console.log("Doubled numbers:", doubled) // [2, 4, 6, 8, 10]

// filter crea un nuevo array con todos los elementos que cumplan una condición
let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log("Even numbers:", evenNumbers) // [2, 4]

// reduce aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor
let sum = numbers.reduce((acc, num) => acc + num, 0) // Suma de todos los números
console.log("Sum of numbers:", sum) // 15

// find devuelve el primer elemento que cumple una condición
let firstEven = numbers.find(num => num % 2 === 0)
console.log("First even number:", firstEven) // 2

// findIndex devuelve el índice del primer elemento que cumple una condición
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0)
console.log("Index of first even number:", firstEvenIndex) // 1

// sort ordena los elementos del array
let unsortedNumbers = [5, 3, 8, 1, 2]
unsortedNumbers.sort((a, b) => a - b) // Ordenar de menor a mayor
console.log("Sorted numbers:", unsortedNumbers) // [1, 2, 3, 5, 8]

// reverse invierte el orden de los elementos del array
unsortedNumbers.reverse()
console.log("Reversed numbers:", unsortedNumbers) // [8, 5, 3, 2, 1]

// splice para añadir o eliminar elementos en una posición específica
let spliceArray = ["a", "b", "c", "d"]
spliceArray.splice(2, 1, "x", "y") // Elimina 1 elemento en el índice 2 y añade "x" y "y"
console.log("After splice:", spliceArray) // ["a", "b", "x", "y", "d"]

// slice para crear un nuevo array a partir de una porción del array original
let sliceArray = spliceArray.slice(1, 4) // Desde el índice 1 hasta el 4 (no incluido)
console.log("Sliced array:", sliceArray) // ["b", "x", "y"]

// concat para unir dos o más arrays
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinedArray = array1.concat(array2)
console.log("Combined array:", combinedArray) // [1, 2, 3, 4, 5, 6]

// spread operator para copiar o combinar arrays
let copiedArray = [...array1]
console.log("Copied array:", copiedArray) // [1, 2, 3]
let mergedArray = [...array1, ...array2]
console.log("Merged array:", mergedArray) // [1, 2, 3, 4, 5, 6]

// flat para aplanar un array multidimensional
let nestedArray = [1, [2, 3], [4, [5, 6]]]
let flatArray = nestedArray.flat(2) // Aplana hasta 2 niveles
console.log("Flat array:", flatArray) // [1, 2, 3, 4, 5, 6]

// fill para llenar un array con un valor específico
let fillArray = new Array(5).fill(0)
console.log("Filled array:", fillArray) // [0, 0, 0, 0, 0]

// Array.from para crear un array a partir de un objeto iterable o similar a un array
let str = "hello"
let charArray = Array.from(str)
console.log("Character array:", charArray) // ["h", "e", "l", "l", "o"]

// Array.isArray para verificar si una variable es un array
console.log("Is fruits an array?", Array.isArray(fruits)) // true
console.log("Is str an array?", Array.isArray(str)) // false

// flatMap para mapear y aplanar un array en una sola operación
let phrases = ["hello world", "foo bar"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log("Flat mapped words:", words) // ["hello", "world", "foo", "bar"]

// end of file