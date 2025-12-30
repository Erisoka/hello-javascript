// Operadores en JavaScript 

// Operadores aritméticos
console.log("5 + 3 =", 5 + 3)  // Suma
console.log("10 - 2 =", 10 - 2) // Resta
console.log("4 * 2 =", 4 * 2)   // Multiplicación
console.log("8 / 2 =", 8 / 2)   // División
console.log("7 % 3 =", 7 % 3)   // Módulo
console.log("2 ** 3 =", 2 ** 3) // Exponenciación

let a = 10
let b = 3
console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a / b =", a / b)
console.log("a % b =", a % b)
console.log("a ** b =", a ** b)

// Operadores de asignación
let c = 5
console.log("Valor inicial de c:", c)
c += 3 // c = c + 3
console.log("Después de c += 3:", c)
c -= 2 // c = c - 2
console.log("Después de c -= 2:", c)
c *= 4 // c = c * 4
console.log("Después de c *= 4:", c)
c /= 2 // c = c / 2
console.log("Después de c /= 2:", c)
c %= 3 // c = c % 3
console.log("Después de c %= 3:", c)
c **= 2 // c = c ** 2
console.log("Después de c **= 2:", c)

// Operadores de comparación
console.log("Valores de a y b:", a, b)
console.log("a == b:", a == b)   // Igualdad
console.log("a == 10:", a == 10) // Igualdad
console.log("a != b:", a != b)   // Desigualdad
console.log("b != 3:", b != 3) // Desigualdad
console.log("a > b:", a > b)     // Mayor que
console.log("a < b:", a < b)     // Menor que
console.log("a >= b:", a >= b)   // Mayor o igual que
console.log("a <= b:", a <= b)   // Menor o igual que
console.log("a === b:", a === b) // Igualdad estricta
console.log("a !== b:", a !== b) // Desigualdad estricta
console.log("10 === '10':", 10 === '10') // Igualdad estricta
console.log("10 !== '10':", 10 !== '10') // Desigualdad estricta
console.log("a === 10:", a === 10) // Igualdad estricta
console.log("b !== 3:", b !== 3) // Desigualdad estricta
console.log("0 == false:", 0 == false) // Igualdad
console.log("1 == true:", 1 == true)   // Igualdad
console.log("0 == '':", 0 == '')       // Igualdad
console.log("0 == ' ':", 0 == ' ')     // Igualdad
console.log("0 === '':", 0 === '')     // Igualdad estricta
console.log("undefined == null:", undefined == null) // Igualdad
console.log("undefined === null:", undefined === null) // Igualdad estricta

// Operadores lógicos
console.log("true && false:", true && false)  // AND lógico
console.log("true || false:", true || false)  // OR lógico
console.log("!true:", !true)                  // NOT lógico

// Operador ternario
let age = 20
let canVote = (age >= 18) ? "Sí, puede votar" : "No, no puede votar"
console.log("Edad:", age)
console.log("¿Puede votar?", canVote)