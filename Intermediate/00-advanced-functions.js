// Funciones avanzadas

// Ciudadanos de primera clase (First-class citizens)
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`)
}

function procesarSaludo(funcionSaludo, nombre) {
  return funcionSaludo(nombre);
}

function retornarSaludo() {
  return saludar
}

procesarSaludo(saludar, "Mundo") // Output: Hola, Mundo!
const funcionDevuelta = retornarSaludo();
funcionDevuelta("Amigo") // Output: Hola, Amigo!
funcionDevuelta("Leonidas") // Output: Hola, Leonidas!

// Funciones de orden superior (Higher-order functions)
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  }
} 
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
console.log(duplicar(5)); // Output: 10
console.log(triplicar(5)); // Output: 15

// Funciones anónimas y funciones flecha (Anonymous functions and arrow functions)
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

const cuadradosFlecha = numeros.map(numero => numero * numero);
console.log(cuadradosFlecha); // Output: [1, 4, 9, 16, 25]

// retorno implícito (implicit return)
const sumar = (a, b) => a + b;
console.log(sumar(3, 4)); // Output: 7

// this léxico en funciones flecha (lexical this in arrow functions)
function Persona(nombre) {
  this.nombre = nombre
  this.saludar = function() {
    setTimeout(() => {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }, 1000);
  }
}
const juan = new Persona("Juan");
// juan.saludar(); // Output after 1 second: Hola, mi nombre es Juan

// Clousures (Son funciones que recuerdan el entorno donde fueron creadas)
function crearContador() {
  let contador = 0;
  return function() {
    contador += 1;
    return contador;
  }
}
const contador1 = crearContador();
console.log(contador1()); // Output: 1
console.log(contador1()); // Output: 2
const contador2 = crearContador();
console.log(contador2()); // Output: 1
console.log(contador1()); // Output: 3

// IIFE (Immediately Invoked Function Expression) - Función que se ejecuta inmediatamente
(function() {
  console.log("Esta función se ejecuta inmediatamente!");
})(); // Output: Esta función se ejecuta inmediatamente!

// Módulos (Modules) - Ejemplo simple usando IIFE
const MiModulo = (function() {
  let privado = "Este es un dato privado";
  function mostrarPrivado() {
    console.log(privado);
  }
  return {
    mostrar: mostrarPrivado
  }
})();
MiModulo.mostrar(); // Output: Este es un dato privado

// Recursión (Recursion)
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(2)); // Output: 2
console.log(factorial(3)); // Output: 6
console.log(factorial(4)); // Output: 24
console.log(factorial(5)); // Output: 120

// Parámetros Rest (...)

function sum(...numeros) {
  let resultado = 0;
  for (let numero of numeros) {
    resultado += numero;
  }
  return resultado;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20, 30)); // Output: 60

// Parámetros Default

function saludar(nombre = "Invitado") {
  console.log(`Hola, ${nombre}!`);
}
saludar(); // Output: Hola, Invitado!
saludar("Juan"); // Output: Hola, Juan!

// Operador Spread (...)

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const combinados = [...numeros1, ...numeros2];
console.log(combinados); // Output: [1, 2, 3, 4, 5, 6]

function sumWithSpread(a, b, c) {
  return a + b + c;
}
console.log(sumWithSpread(10, 20, 30)); // Sin Spread Output: 60
console.log(sumWithSpread(1, 2, 3)); // Sin Spread Output: 6
console.log(sumWithSpread(...combinados)); // Output: 6
console.log(sumWithSpread(1,2)); // Output: NaN

// Funciones parciales
function suma(a, b) {
  return a + b;
}
function sumaParcial(a) {
  return function(b) {
    return suma(a, b);
  }
}
const sumaDe3 = sumaParcial(3);
console.log(sumaDe3(5)); // Output: 8

// Currying 

function suma(a, b) {
  return a + b;
}
function sumaCurried(a) {
  return function(b) {
    return suma(a, b);
  }
}
const sumaDe3Curried = sumaCurried(3);
console.log(sumaDe3Curried(5)); // Output: 8
console.log(sumaCurried(6)(5)); // Output: 11
console.log(sumaCurried(7)(8)); // Output: 15

// Callbacks (Son funciones que se pasan como argumentos a otras funciones)
function operacionMatematica(a, b, callback) {
  return callback(a, b);
}
function multiplicar(x, y) {
  return x * y;
}
function dividir(x, y) {
  return x / y;
}
function potenciar(x, y) {
  return Math.pow(x, y);
}
console.log(operacionMatematica(5, 3, multiplicar)); // Output: 15
console.log(operacionMatematica(10, 2, dividir)); // Output: 5
console.log(operacionMatematica(2, 3, potenciar)); // Output: 8