// Tipos de datos básicos (primitivos) en JavaScript 

// String (cadena de texto)
let myString = "Hello, JavaScript!"
console.log(myString)

// Number (número)
let myNumber = 42 // Entero
let myFloat = 3.14 // Decimal
console.log("Integer:", myNumber)
console.log("Float:", myFloat)

// Boolean (booleano)
let isJavaScriptFun = true
let isFishTasty = false
console.log("Is JavaScript fun?", isJavaScriptFun)
console.log("Is fish tasty?", isFishTasty)

// Undefined (indefinido)
let myUndefinedVariable
console.log("Undefined variable:", myUndefinedVariable)

// Null (nulo)
let myNullVariable = null
console.log("Null variable:", myNullVariable)

// Symbol (símbolo)
let mySymbol = Symbol("uniqueIdentifier")
console.log("Symbol:", mySymbol)

// BigInt (entero grande)
let myBigInt = 9007199254740991n // Nota la 'n' al final
console.log("BigInt:", myBigInt)

// Tipo dinámico (dynamic typing)
let dynamicVariable = "I am a string"
console.log("Dynamic variable (string):", dynamicVariable)
dynamicVariable = 100
console.log("Dynamic variable (number):", dynamicVariable)  
dynamicVariable = true
console.log("Dynamic variable (boolean):", dynamicVariable)
dynamicVariable = null
console.log("Dynamic variable (null):", dynamicVariable)  

// typeof operator (operador typeof)
console.log("Type of myString:", typeof myString)
console.log("Type of myNumber:", typeof myNumber)
console.log("Type of isJavaScriptFun:", typeof isJavaScriptFun)
console.log("Type of myUndefinedVariable:", typeof myUndefinedVariable)
console.log("Type of myNullVariable:", typeof myNullVariable) // Nota: esto devuelve 'object', es un comportamiento histórico de JavaScript
console.log("Type of mySymbol:", typeof mySymbol)
console.log("Type of myBigInt:", typeof myBigInt)
console.log("Type of dynamicVariable:", typeof dynamicVariable)