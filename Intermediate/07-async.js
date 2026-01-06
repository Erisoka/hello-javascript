// Programación Asincrona en JavaScript

// Código Síncrono

console.log("Inicio") 

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("Fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js: setTimeout()...
// 3. Task Queue (Cola de tareas) y MicrotaskQueue

// Flujo del Event Loop
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite.

// Código asíncrono

// - Callbacks

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta despues de 2 segundos")
}, 2000)

console.log("Fin")

/* Inicio
Fin
Esto se ejecuta despues de 2 segundos */

// - Problema: Callback Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3")
        callback()
    }, 1000)
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4")
        callback()
    }, 1000)
}

function step5() {
    console.log("Step 5: Todos los pasos completados.")
}

step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5()
            })
        })
    })
})

/* Step 1
Esto se ejecuta despues de 2 segundos
Step 2
Step 3
Step 4
Step 5: Todos los pasos completados. */

// - Promesas

function step1Promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1")
            resolve()
        }, 1000)
    })
}

step1Promise()
  .then(() => {
    console.log("El paso 1 ha terminado, ahora puedo ejecutar el siguiente paso.");
  })

const promesa = new Promise((resolve, reject) => {
  setInterval(() => {
    const ok = false
    if (ok) {
      resolve("Operación exitosa")
    } else {
      reject("Operación fallida")    
    }
  }, 3000)
})

promesa.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

// - Encadenamiento de promesas

function p1Promise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p1 con promesa completado")
      resolve()
    }, 1500)
  })
}

function p2Promise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p2 con promesa completado")
      resolve()
    }, 2000)
  })
}

function p3Promise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p3 con promesa completado")
      resolve()
    }, 2500)
  })
}

function p4Promise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p4 con promesa completado")
      resolve()
    }, 3000)
  })
}

function step5() {
  console.log("Step 5: Todos los pasos completados.")
}

p1Promise()
  .then(() => {
    return p2Promise()
  })
  .then(() => {
    return p3Promise()
  })
  .then(() => {
    console.log("Todas las promesas han terminado")
  })

// - Async/Await (Async convierte una función en Asíncrona - Await pausa la ejecución hasta que la promesa se resuelva)

function espera(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function asyncFunction() {
  console.log("Inicio de la función asíncrona")
  
  try {
    await espera(5000)
    console.log("Después de 5 segundos")
    await p1Promise()
    await p2Promise()
    await p3Promise()
    await p4Promise()
    step5()
  } catch (error) {
    console.log(error)
  }

  console.log("Fin de la función asíncrona")
}

asyncFunction()

// - Fetch