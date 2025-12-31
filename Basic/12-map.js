// Map es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo de dato.
let myMap = new Map() // Crear un mapa vacío
console.log("Map vacío:", myMap)

let person = new Map([
    ["nombre", "Leonidas"],
    ["edad", 44],
    ["ciudad", "Ciénaga"]
])
console.log("Person map:", person)

// Añadir un par clave-valor al mapa
person.set("profesion", "ingeniero")
console.log("Person map after adding profesion:", person)

// Eliminar un par clave-valor del mapa
person.delete("ciudad")
console.log("Person map after deleting ciudad:", person)

// Verificar si una clave existe en el mapa
let hasNombre = person.has("nombre")
console.log("¿Contiene nombre?", hasNombre) // true

// Obtener el valor asociado a una clave
let nombre = person.get("nombre")
console.log("Nombre:", nombre) // "Leonidas"

// Longitud del mapa
console.log("Longitud del mapa:", person.size) // 3

// Acceder a todas las claves
for (let key of person.keys()) {
    console.log("Clave:", key)
}

// Acceder a todos los valores
for (let value of person.values()) {
    console.log("Valor:", value)
}

// Acceder a todos los pares clave-valor
for (let entry of person.entries()) {
    console.log("Par clave-valor:", entry)
}

// Recorrer el mapa con un bucle for...of
for (let [key, value] of person) {
    console.log(key, value)
}

// Convertir mapa a array de pares clave-valor
let personArray = Array.from(person)
console.log("Person as array of pairs:", personArray) // [["nombre", "Juan"], ["edad", 30], ["profesion", "ingeniero"]]

// Convertir array de pares a mapa
let colorsArrayPairs = [["rojo", "#FF0000"], ["verde", "#00FF00"], ["azul", "#0000FF"]]
let colorsMap = new Map(colorsArrayPairs)
console.log("Colors map:", colorsMap) // Map {"rojo" => "#FF0000", "verde" => "#00FF00", "azul" => "#0000FF"}

// Vaciar el mapa
person.clear()
console.log("Person after clearing:", person) // Map {}

// Métodos avanzados: forEach

// forEach para recorrer los elementos del mapa
person.forEach((value, key) => console.log(key, value))

// end of file