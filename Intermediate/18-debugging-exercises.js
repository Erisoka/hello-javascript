/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

const numbers = [10, 20, 30, 40, 50]

function sumNumbers(list) {
    let total = 0
    
    for (let i = 0; i < list.length; i++) {
        total = total + list[i]
    }

    return total
}

// console.log("El resultado de la suma es:", sumNumbers(numbers))

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución

function calculateStats(numbers) {
    let stats = {
        count: 0,
        sum: 0,
        average: 0
    }
    
    for (let n of numbers) {
        stats.count++
        stats.sum += n
        stats.average = stats.sum / stats.count
    }
    
    return stats
}

// console.log(calculateStats([10, 20, 30, 15, 25]))

// 3. Analiza la "Pila de llamadas" (Call Stack) con funciones anidadas

function procesoA() {
    console.log("Paso 1: Entrando en A")
    procesoB()
    console.log("Paso 4: Saliendo de A")
}

function procesoB() {
    console.log("Paso 2: Entrando en B")
    procesoC()
    console.log("Paso 3: Saliendo de B")
}

function procesoC() {
    console.log("Estás en lo más profundo de la pila (C)")
}

procesoA()