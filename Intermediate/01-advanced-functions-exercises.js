/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function retornarFuncion() {
  return function() {
    console.log("¡Hola desde la función retornada!");
  };
}
const funcionRetornada = retornarFuncion();
funcionRetornada(); // Output: ¡Hola desde la función retornada!

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
const multiplicarPor2 = multiplicar(2);
const multiplicarPor3 = multiplicar(3);
console.log(multiplicarPor2(4)(5)); // Output: 40
console.log(multiplicarPor3(4)(5)); // Output: 60

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
    } else {
    return base * potencia(base, exponente - 1);
  }
}
console.log(potencia(2, 3)); // Output: 8
console.log(potencia(3, 4)); // Output: 81

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(initialValue) {
  let counter = initialValue;
  return {
    increment: function() {
      counter++;
    },
    decrement: function() {
      counter--;
    },
    getValue: function() {
      return counter;
    }
  };
}
const counter = createCounter(0);
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum * multiplier;
}
console.log(sumManyTimes(2, 1, 2, 3)); // Output: 12 (2 * sum(1+2+3))
console.log(sumManyTimes(3, 5, 10)); // Output: 45 (3 * sum(5+10))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
/* function sumCallback(callback, ...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  callback(sum);
}
sumCallback(function(result) {
  console.log(`El resultado de la suma es: ${result}`);
}, 1, 2, 3, 4, 5); // Output: El resultado de la suma es: 15 */
function sumCallback(callback, ...numbers){
  return callback(numbers)
}
function sum(numbers){
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log("El resultado de la suma es:", sumCallback(sum, 1, 2, 3, 4, 5)); // Output: 15



// 7. Desarrolla una función parcial
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

const add1 = sumaParcial(1);
const add2 = sumaParcial(2);
console.log(add1(3)); // Output: 4
console.log(add2(4)); // Output: 6

// 8. Implementa un ejemplo que haga uso de Spread
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

// 9. Implementa un retorno implícito
const sumar = (a, b) => a + b;
console.log(sumar(3, 4)); // Output: 7

// 10. Haz uso del this léxico
function Persona(nombre) {
  this.nombre = nombre
  this.saludar = function() {
    setTimeout(() => {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }, 1000);
  }
}
const juan = new Persona("Juan");
juan.saludar(); // Output after 1 second: Hola, mi nombre es Juan