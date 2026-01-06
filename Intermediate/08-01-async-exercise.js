// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludar(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola, ${nombre}!`);
    callback();
  }, 2000);
}

saludar("Leonidas", () => {
  console.log("Callback ejecutado después de 2 segundos.");
})