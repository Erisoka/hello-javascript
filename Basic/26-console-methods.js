// Consola métodos

// 1. Muestra un mensaje en la consola
console.log("Hola, consola!");
console.info("Este es un mensaje con información adicional.");

// 2. Muestra un mensaje de advertencia
console.warn("Este es un mensaje de advertencia.");

// 3. Muestra un mensaje de error
console.error("Este es un mensaje de error.");

// 4. Mide el tiempo de ejecución de un bloque de código
console.time("Tiempo de ejecución");
let suma = 0;
for (let i = 1; i <= 1000000; i++) {
  suma += i;
}
console.timeEnd("Tiempo de ejecución");

// 5. Muestra una tabla en la consola
const personas = [
  { nombre: "Luisito", edad: 25 },
  { nombre: "Carlangas", edad: 30 },
  { nombre: "TusNalgas", edad: 28 }
];
console.table(personas);

// 6. Agrupa mensajes en la consola
console.group("Grupo de mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd("Grupo de mensajes");


// 8. Muestra un mensaje con formato
const nombre = "MoureDev";
console.log(`Hola, %c${nombre}`, "color: blue; font-weight: bold;");

// 9. Cuenta las veces que se llama a una función
function contarLlamadas() {
  console.count("Llamadas a contarLlamadas");
}
contarLlamadas();
contarLlamadas();
contarLlamadas();
console.countReset("Llamadas a contarLlamadas");
contarLlamadas();

// 10. Traza la pila de llamadas
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

// 11. Muestra un mensaje condicionalmente
const condicion = true;
console.assert(condicion, "La condición es falsa!");

const age = 17;
console.assert(age >= 18, "La persona es menor de edad!");

// 7. Limpia la consola
// console.clear(); // Descomenta esta línea para limpiar la consola

// Resumen: Este código demuestra varios métodos de la consola en JavaScript, incluyendo log, warn, error, time, table, group y clear para mejorar la depuración y visualización de información en la consola.