// Estructuras avanzadas

// Arrays avanzados

// - Métodos funcionales

// forEach

const numeros = [1, 2, 3, 4, 5]
numeros.forEach(numero => console.log(numero))

// map

const cuadrados = numeros.map(numero => numero * numero)
console.log(cuadrados)

// filter

const pares = numeros.filter(numero => numero % 2 === 0)
console.log(pares)

// reduce

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0) // previousValue (acumulador), currentValue (numero), initialValue (0)
console.log(suma)

// - Manipulación

// flat

let nestedArray = [[1, 2], [3, 4, 5]];
let flattenedArray = nestedArray.flat(); // depth 1 de forma predeterminada
console.log(flattenedArray); // Output [ 1, 2, 3, 4, 5 ]
nestedArray = [[1, 2], [3, [4, [5, 6]]]]
flattenedArray = nestedArray.flat(2); // depth 2
console.log(flattenedArray); // Output [ 1, 2, 3, 4, [ 5, 6 ] ]
flattenedArray = nestedArray.flat(3); // depth 3
console.log(flattenedArray); // Output [ 1, 2, 3, 4, 5, 6 ]

// flatMap

let frases = ["Hola mundo", "JavaScript es genial"]
let palabras = frases.flatMap(frase => frase.split(" "))
console.log(palabras) // Output [ 'Hola', 'mundo', 'JavaScript', 'es', 'genial' ]

// - Ordenación

// sort

let unsorted = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
let sorted = unsorted.sort((a, b) => a - b)
console.log(sorted) // Output [ 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 ]

sorted = unsorted.sort((a, b) => b - a)
console.log(sorted) // Output [ 9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1 ]

// reverse

let reversed = sorted.reverse()
console.log(reversed) // Output [ 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 ]

// - Combinación

// concat 

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combined = array1.concat(array2)
console.log(combined) // Output [ 1, 2, 3, 4, 5, 6 ]

// - Búsqueda

// find

let numbers = [1, 2, 3, 4, 5]
let found = numbers.find(number => number > 3)
console.log(found) // Output 4

// findIndex

let foundIndex = numbers.findIndex(number => number > 3)
console.log(foundIndex) // Output 3

// includes

let includes = numbers.includes(3)
console.log(includes) // Output true

// join 

let joined = numbers.join(", ")
console.log(joined) // Output 1, 2, 3, 4, 5

// Unión

const setA = new Set([1, 2, 3, 4, 5])
const setB = new Set([4, 5, 6, 7, 8])
const union = new Set([...setA, ...setB])
console.log(union) // Output { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersección 

const intersection = new Set([...setA].filter(x => setB.has(x)))
console.log("Intersección de setA y setB:", intersection) // Output { 4, 5 }

// Diferencia

const difference = new Set([...setA].filter(x => !setB.has(x)))
console.log("Diferencia de setA y setB:", difference) // Output { 1, 2, 3 }

// Sets avanzados

// Conversión 

console.log("setA a Array: ", [...setA])

let arrayNumeros = [1, 2, 3, 4, 5, 1, 2, 3]
let setNumeros = new Set(arrayNumeros)
console.log(setNumeros) // Output { 1, 2, 3, 4, 5 }

// Eliminación de duplicados (array)
console.log("Array de números con duplicados:", arrayNumeros) // Output 1, 2, 3, 4, 5, 1, 2, 3
arrayNumeros = [...new Set(arrayNumeros)]
console.log("Array de números sin duplicados:", arrayNumeros) // Output [ 1, 2, 3, 4, 5 ]

// - Métodos

// add

let mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(3)
console.log(mySet) // Output Set { 1, 2, 3 }

// - Iteración 

// forEach

mySet.forEach(value => console.log(value)) // Output 1, 2, 3

// Maps avanzados 

let myMap = new Map()
myMap.set("nombre", "Juan")
myMap.set("edad", 30)
myMap.set("profesion", "ingeniero")
console.log(myMap) // Output  
console.log(myMap.get("nombre")) // Output Juan
console.log(myMap.size) // Output 3
console.log(myMap.has("edad")) // Output true
console.log(myMap.delete("profesion")) // Output true
console.log(myMap.clear()) // Output undefined

// - Iteración

// forEach  
let myMap2 = new Map([
    ["nombre", "Leonidas"],
    ["edad", 42],
    ["profesion", "docente"]  
])
console.log(myMap2) // Output Map { 'nombre' => 'Leonidas', 'edad' => 42, 'profesion' => 'docente' }
myMap2.forEach((value, key) => console.log(`${key}: ${value}`)) // Output nombre Leonidas, edad 42, profesion docente

// for of

for (let [key, value] of myMap2) {
    console.log(key, value)
} // Output nombre Leonidas, edad 42, profesion docente

// Conversion

// Mapa a Array

let arrayFromMap = Array.from(myMap2)
console.log(arrayFromMap) // Output [  [ 'nombre', 'Leonidas' ],  [ 'edad', 42 ],  [ 'profesion', 'docente' ] ]

// Array a Mapa

let mapFromArray = new Map(arrayFromMap)
console.log(mapFromArray) // Output Map(3) {  'nombre' => 'Leonidas',  'edad' => 42,  'profesion' => 'docente' }

// Mapa a Objeto

let objectFromMap = Object.fromEntries(myMap2)
console.log(objectFromMap) // Output { nombre: 'Leonidas', edad: 42, profesion: 'docente' }

// Objeto a Mapa

let mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject) // Output Map(3) { 'nombre' => 'Leonidas', 'edad' => 42, 'profesion' => 'docente' }