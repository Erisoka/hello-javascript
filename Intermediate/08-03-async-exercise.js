// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("Número par")
    } else {
      reject("Número impar")
    }
  })
}

verificarNumero(6)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })