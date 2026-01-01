// Clases en JavaScript

// Las Clases son una forma de definir objetos y sus comportamientos en JavaScript.

// Definición de una clase
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// Creación de una instancia de la clase
const persona1 = new Persona("Juan", 25);
console.log(persona1.nombre); // Output: Juan
console.log(persona1.edad);  // Output: 25

// Valores por defecto en el constructor
class PersonaConDefaults {
  constructor(nombre = "Desconocido", edad = 0) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
const personaDefault = new PersonaConDefaults();
console.log(personaDefault.nombre); // Output: Desconocido
console.log(personaDefault.edad);  // Output: 0 
personaDefault.nombre = "Carlos";
personaDefault.edad = 42;
console.log(personaDefault.nombre); // Output: Carlos
console.log(personaDefault.edad);  // Output: 42

// Métodos en clases
class PersonaConMetodo {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona2 = new PersonaConMetodo("Ana", 30);
persona2.saludar(); // Output: Hola, soy Ana y tengo 30 años.

// Herencia de clases
class Empleado extends Persona {
  constructor(nombre, edad, puesto) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.puesto = puesto;
  }
  describir() {
    console.log(`Soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.puesto}.`);
  }
}

const empleado1 = new Empleado("Luis", 28, "Desarrollador");
empleado1.describir(); // Output: Soy Luis, tengo 28 años y trabajo como Desarrollador.

// Propiedades y métodos estáticos
class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}
console.log(Matematica.sumar(5, 3)); // Output: 8

// Private fields (campos privados)
class CuentaBancaria {
  #saldo; // Campo privado

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    this.#saldo += monto;
  }

  getSaldo() {
    return this.#saldo;
  }
}
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.getSaldo()); // Output: 1500
// console.log(cuenta.#saldo); // Error: No se puede acceder a un campo privado   

class PersonaConCuentaBancaria extends Persona {
  constructor(nombre, edad, saldoInicial) {
    super(nombre, edad);
    this.cuentaBancaria = new CuentaBancaria(saldoInicial);
  } 
  mostrarSaldo() {
    console.log(`El saldo de ${this.nombre} es: ${this.cuentaBancaria.getSaldo()}`);
  }
}

const personaConCuenta = new PersonaConCuentaBancaria("Marta", 35, 2000);
personaConCuenta.mostrarSaldo(); // Output: El saldo de Marta es: 2000
personaConCuenta.cuentaBancaria.depositar(300);
personaConCuenta.mostrarSaldo(); // Output: El saldo de Marta es: 2300

// Getters y Setters
class Rectangulo {
  #ancho;
  #alto;

  constructor(ancho, alto) {
    this.#ancho = ancho;
    this.#alto = alto;
  }
  get ancho() {
    return this.#ancho;
  }
  get alto() {
    return this.#alto;
  }
  get area() {
    return this.#ancho * this.#alto;
  }
  set dimensiones({ ancho, alto }) {
    this.#ancho = ancho;
    this.#alto = alto;
  }
}

const rectangulo = new Rectangulo(10, 5);
console.log(rectangulo.area); // Output: 50
rectangulo.dimensiones = { ancho: 20, alto: 10 };
console.log(rectangulo.area); // Output: 200

// Resumen: Este código demuestra cómo definir y usar clases en JavaScript, incluyendo constructores, métodos, herencia, propiedades estáticas y campos privados.