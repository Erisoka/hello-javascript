/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function mostrarError(mensaje) {
  console.error("Error:", mensaje);
}
mostrarError("Este es un mensaje de error.");

// 2. Crea una función que utilice warn correctamente
function mostrarAdvertencia(mensaje) {
  console.warn("Advertencia:", mensaje);
}
mostrarAdvertencia("Este es un mensaje de advertencia.");

// 3. Crea una función que utilice info correctamente
function mostrarInfo(mensaje) {
  console.info("Información:", mensaje);
}
mostrarInfo("Este es un mensaje de información.");

// 4. Utiliza table
const personas = [
  { nombre: "Luisito", edad: 25 },
  { nombre: "Carlangas", edad: 30 },
  { nombre: "TusNalgas", edad: 28 }
];
console.table(personas);

// 5. Utiliza group
console.group("Grupo de mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd("Grupo de mensajes");

// 6. Utiliza time
console.time("Tiempo de ejecución");
let suma = 0;
for (let i = 1; i <= 1000000; i++) {
  suma += i;
}
console.timeEnd("Tiempo de ejecución");

// 7. Valida con assert si un número es positivo
function validarNumeroPositivo(numero) {
  console.assert(numero > 0, "El número debe ser positivo.");
}
validarNumeroPositivo(5);
validarNumeroPositivo(-3);

// 8. Utiliza count
function contarLlamadas() {
  console.count("Llamadas a contarLlamadas");
}
contarLlamadas();
contarLlamadas();
contarLlamadas();
console.countReset("Llamadas a contarLlamadas");
contarLlamadas();

// 9. Utiliza trace
function funcionA() {
  funcionB();
}
function funcionB() {
  funcionC();
}
function funcionC() {
  console.trace("Traza de la pila de llamadas");
}
funcionA();

// 10. Utiliza clear
// console.clear(); // Descomenta esta línea para limpiar la consola

// Resumen: Este código demuestra varios métodos de la consola en JavaScript, incluyendo log, warn, error, time, table, group y clear para mejorar la depuración y visualización de información en la consola.