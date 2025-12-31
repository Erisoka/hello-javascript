// Strings in JavaScript

// Definición de cadenas de texto
let singleQuoteString = 'Esto es una cadena con comillas simples'
let doubleQuoteString = "Esto es una cadena con comillas dobles"
let backtickString = `Esto es una cadena con backticks`
let multiLineString = `Esta es una cadena
que abarca
múltiples líneas.`

// Concatenación de cadenas
let name = "Leonidas"
let welcomeMessage = "Hola, " + name + "! Bienvenido a JavaScript."
console.log(welcomeMessage)
let greeting = `Hola, ${name}! Bienvenido a JavaScript.`
console.log(greeting)

// Propiedades y métodos comunes de las cadenas
let sampleString = "  Hola, Mundo!  "
console.log("Longitud de la cadena:", sampleString.length)
console.log("Convertir a mayúsculas:", sampleString.toUpperCase())
console.log("Convertir a minúsculas:", sampleString.toLowerCase())
console.log("Buscar 'Mundo':", sampleString.indexOf("Mundo"))
console.log("Incluir 'Hola':", sampleString.includes("Hola")) // true
console.log("Incluir 'Mundo':", sampleString.includes("Mundo"))
console.log("Incluir 'Leonidas':", sampleString.includes("Leonidas")) // false
console.log("Eliminar espacios en blanco:", sampleString.trim())
console.log("Reemplazar texto:", sampleString.replace("Mundo", "JavaScript"))
console.log("Obtener subcadena:", sampleString.substring(2, 7)) // desde índice 2 hasta 7 (sin incluir 7)
console.log("Obtener subcadena con slice:", sampleString.slice(2, 7)) // similar a substring
console.log("Obtener carácter en posición 7:", sampleString.charAt(5))
console.log("Dividir cadena:", sampleString.split(","))

// Template literals
let age = 44
let templateLiteral = `Mi nombre es ${name} y tengo ${age} años.`
console.log(templateLiteral)