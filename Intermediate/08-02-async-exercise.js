// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
  setTimeout(() => {
    console.log("Tarea 1 completada");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Tarea 2 completada");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Tarea 3 completada");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("Todas las tareas han sido completadas.");
    });
  });
});

