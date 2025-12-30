/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 5 + 3;
let resta = 10 - 2;
let multiplicacion = 4 * 2;
let division = 8 / 2;
let modulo = 7 % 3;
let exponenciacion = 2 ** 3;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacionSuma = 5;
asignacionSuma += 3; // asignacionSuma = asignacionSuma + 3

let asignacionResta = 10;
asignacionResta -= 2; // asignacionResta = asignacionResta - 2

let asignacionMultiplicacion = 4;
asignacionMultiplicacion *= 2; // asignacionMultiplicacion = asignacionMultiplicacion * 2

let asignacionDivision = 8;
asignacionDivision /= 2; // asignacionDivision = asignacionDivision / 2

let asignacionModulo = 7;
asignacionModulo %= 3; // asignacionModulo = asignacionModulo % 3

let asignacionExponenciación = 2;
asignacionExponenciación **= 3; // asignaciónExponenciación = asignaciónExponenciación ** 3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("5 > 3:", 5 > 3);
console.log("10 < 20:", 10 < 20);
console.log("15 >= 15:", 15 >= 15);
console.log("8 <= 8:", 8 <= 8);
console.log("4 == '4':", 4 == '4');

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("5 < 3:", 5 < 3);
console.log("10 > 20:", 10 > 20);
console.log("15 <= 14:", 15 <= 14);
console.log("8 >= 9:", 8 >= 9);
console.log("4 === '4':", 4 === '4');

// 5. Utiliza el operador lógico and

console.log("true && false:", true && false);
console.log("true && true:", true && true);
console.log("false && false:", false && false);

// 6. Utiliza el operador lógico or

console.log("true || false:", true || false);
console.log("true || true:", true || true);
console.log("false || false:", false || false);

// 7. Combina ambos operadores lógicos

console.log("true && false || true:", true && false || true);
console.log("false && true || false:", false && true || false);
console.log("true || false && false:", true || false && false);

// 8. Añade alguna negación

console.log("!true:", !true);
console.log("!false:", !false);
console.log("!(true && false):", !(true && false));

// 9. Utiliza el operador ternario

let age = 20;
let nationality = "Colombian";
let canVote = (age >= 18 && nationality === "Colombian") ? "Sí, puede votar" : "No, no puede votar";
console.log("Edad:", age);
console.log("¿Puede votar?", canVote);

// 10. Combina operadores aritméticos, de comparación y lógicas

let x = 10;
let y = 5;
let z = 2;
console.log("x + y > z:", x + y > z);
console.log("x * y === z * 10:", x * y === z * 10);
console.log("x - y !== z:", x - y !== z);