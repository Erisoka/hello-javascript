// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Primera tarea completada");
      resolve();
    }, 1000);
  });
}

function secondTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Segunda tarea completada");
      resolve();
    }, 2000);
  });
}

function thirdTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tercera tarea completada");
      resolve();
    }, 1500);
  });
}

firstTask()
  .then(() => {
    return secondTask()
  })
  .then(() => {
    return thirdTask()
  })
  .then(() => {
    console.log("Todas las tareas han sido completadas.");
  })
  .catch(error => {
    console.log(error)
  })

//