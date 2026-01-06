// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// Inicio
// Fin
// Promesa resuelta
// setTimeout ejecutado

// EXPLICACION 

/* 
Este código es un ejemplo clásico para entender cómo funciona el Event Loop (Bucle de Eventos) en JavaScript y la prioridad de ejecución entre tareas síncronas, microtareas y macrotareas.

Aquí tienes la explicación paso a paso de por qué se imprime en ese orden:

Conceptos Clave
Call Stack (Pila de llamadas): Donde se ejecuta el código síncrono inmediato.
Microtask Queue (Cola de Microtareas): Aquí van las Promesas (.then, catch, finally) y queueMicrotask. Tienen alta prioridad.
Task Queue / Macrotask Queue (Cola de Tareas): Aquí van los setTimeout, setInterval, eventos del DOM, etc. Tienen baja prioridad.
Ejecución línea por línea
console.log("Inicio")

Es código síncrono. Se ejecuta inmediatamente.
Salida: Inicio
setTimeout(..., 0)

Es una operación asíncrona (Macrotarea).
Aunque el tiempo es 0, el callback no se ejecuta inmediatamente. Se envía a la Task Queue (Cola de Macrotareas) para esperar su turno.
Promise.resolve().then(...)

Es una operación asíncrona (Microtarea).
El callback dentro del .then() se envía a la Microtask Queue.
Nota importante: El Event Loop siempre vacía la cola de Microtareas antes de procesar cualquier cosa de la cola de Macrotareas (como el setTimeout).
console.log("Fin")

Es código síncrono. Se ejecuta inmediatamente.
Salida: Fin
El trabajo del Event Loop
Una vez que el Call Stack está vacío (se terminó de ejecutar el código síncrono principal):

Revisión de Microtareas: El Event Loop mira la Microtask Queue. Encuentra el callback de la Promesa.
Lo mueve al Call Stack y lo ejecuta.
Salida: Promesa resuelta
Revisión de Macrotareas: Ahora que la Microtask Queue está vacía, el Event Loop mira la Task Queue. Encuentra el callback del setTimeout.
Lo mueve al Call Stack y lo ejecuta.
Salida: setTimeout ejecutado

*********************
RESULTADO FINAL:
Inicio
Fin
Promesa resuelta
setTimeout ejecutado
**********************
Resumen: El código síncrono va primero, luego todas las Promesas (Microtareas), y finalmente los setTimeout (Macrotareas).
*/