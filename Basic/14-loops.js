// Loops o bucles, permiten ejecutar un bloque de código varias veces hasta que se cumpla una condición determinada.

// Bucle for
for (let i = 0; i < 5; i++) {
    console.log("Bucle for, iteración:", i)
} // Imprime los números del 0 al 4

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    console.log("Número en array:", numbers[i])
}

// Bucle while  
let j = 0
while (j < 5) {
    console.log("Bucle while, iteración:", j)
    j++
} // Imprime los números del 0 al 4

// bucle infinito con while (descomentar para probar)
// while (true) {
//     console.log("Bucle infinito")
// }

// Bucle do...while
let k = 0
do {
    console.log("Bucle do...while, iteración:", k)
    k++
} while (k < 5) // Imprime los números del 0 al 4

// Bucle for...of (para iterar sobre arrays o estructuras iterables)
let array = ["manzana", "banana", "naranja"]
for (let fruit of array) {
    console.log("Bucle for...of, fruta:", fruit)
}

// Bucle for...in (para iterar sobre las propiedades de un objeto)
let person = {
    nombre: "Juan",
    edad: 30,
    profesion: "ingeniero"
}
for (let key in person) {
    console.log("Bucle for...in, clave:", key, "valor:", person[key])
}

// Uso de break y continue
for (let n = 0; n < 10; n++) {
    if (n === 5) {
        break; // Sale del bucle cuando n es igual a 5
    }
    console.log("Bucle for con break, iteración:", n)
}

for (let m = 0; m < 10; m++) {
    if (m === 5) {
        continue; // Salta la iteración cuando m es igual a 5
    }
    console.log("Bucle for con continue, iteración:", m)
}

// end of file