// Set
let mySet = new Set() // Crear un set vacío
console.log("Set vacío:", mySet)

let fruits = new Set(["manzana", "banana", "naranja"])
console.log("Fruits set:", fruits)

// Añadir un elemento al set
fruits.add("uva")
console.log("Fruits set after adding uva:", fruits)

// Eliminar un elemento del set
fruits.delete("banana")
console.log("Fruits set after deleting banana:", fruits)

// Verificar si un elemento existe en el set
let hasOrange = fruits.has("naranja")
console.log("¿Contiene naranja?", hasOrange) // true

// Longitud del set
console.log("Longitud del set:", fruits.size) // 2

// Recorrer el set con un bucle for...of
for (let fruit of fruits) {
    console.log(fruit)
}

// Convertir set a array
let fruitsArray = Array.from(fruits)
console.log("Fruits as array:", fruitsArray) // ["manzana", "naranja"]

// Convertir array a set
let colorsArray = ["rojo", "verde", "azul", "rojo"]
let colorsSet = new Set(colorsArray)
console.log("Colors set (duplicates removed):", colorsSet) // Set {"rojo", "verde", "azul"}

// Vaciar el set
fruits.clear()
console.log("Fruits after clearing:", fruits) // Set {}

// Crear un set con elementos duplicados (los duplicados se eliminan automáticamente)
let numbers = new Set([1, 2, 2, 3, 3, 4, 4, 5])
console.log("Numbers set (duplicates removed):", numbers) // Set {1, 2, 3, 4, 5}

// Métodos avanzados: forEach

// forEach para recorrer los elementos del set
numbers.forEach(num => console.log(num))

// end of file