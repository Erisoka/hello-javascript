// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function promise1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promesa 1 resuelta");
      resolve();
    }, 1000);
  });
}

function promise2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promesa 2 resuelta");
      resolve();
    }, 2000);
  });
}

function promise3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promesa 3 resuelta");
      resolve();
    }, 1500);
  });
}

Promise.all([promise1(), promise2(), promise3()])
  .then(() => {
    console.log("Todas las promesas resueltas");
  })
  .catch(error => {
    console.error("Una de las promesas falló:", error);
  });
  