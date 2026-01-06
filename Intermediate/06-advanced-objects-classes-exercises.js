/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
}
coche.__proto__.arrancar = function() {
  console.log("El coche ha arrancado.")
}
coche.arrancar() // Output: El coche ha arrancado.
console.log(coche) // Output { marca: 'Toyota', modelo: 'Corolla', año: 2020, arrancar: [Function: arrancar] }

// 2. Crea un objeto que herede de otro
let bicicleta = {
  marca: "Monrake",
  modelo: "Monareta",
  año: 2022
}
bicicleta.__proto__ = coche
console.log(bicicleta) // Output { marca: 'Monrake', modelo: 'Monareta', 'año': 2022 }
console.log(bicicleta.marca) // Output Monrake
bicicleta.arrancar() // Output El coche ha arrancado.

// 3. Define un método de instancia en un objeto
let persona = {
  nombre: "Juan",
  edad: 13,
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
  }
}
persona.saludar() // Output Hola, mi nombre es Juan y tengo 13 años.

// 4. Haz uso de get y set en un objeto
let persona2 = {
  _nombre: "Carlos",
  _edad: 42,
  get nombre() {
    return this._nombre
  },
  set nombre(nombre) {
    this._nombre = nombre
  },
  get edad() {
    return this._edad
  },
  set edad(edad) {
    this._edad = edad
  }
}
console.log(persona2.nombre) // Output Carlos
console.log(persona2.edad) // Output 42
persona2.nombre = "Leonidas"
persona2.edad = 37
console.log(persona2.nombre) // Output Leonidas
console.log(persona2.edad) // Output 37

// 5. Utiliza la operación assign en un objeto
let person_core = { name: "Juan" }
let person_details = { age: 13 }
let full_person = Object.assign(person_core, person_details)
console.log(full_person) // Output

// 6. Crea una clase abstracta
class Figura {
  constructor() {
    if (new.target === Figura) {
      throw new Error("No se puede instanciar una clase abstracta directamente.");
    }
  }

  calcularArea() {
    throw new Error("El método 'calcularArea()' debe ser implementado por las subclases.");
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

const circulo = new Circulo(5);
console.log("Área del círculo:", circulo.calcularArea()); // Output: Área del círculo: 78.53981633974483

const cuadrado = new Cuadrado(4);
console.log("Área del cuadrado:", cuadrado.calcularArea()); // Output: Área del cuadrado: 16

// const figura = new Figura(); // Esto lanzaría un error

// 7. Utiliza polimorfismo en dos clases diferentes
class Animal {
  makeSound() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  makeSound() {
    console.log("El perro ladra.");
  }
}

class Gato extends Animal {
  makeSound() {
    console.log("El gato maulla.");
  }
}

const miPerro = new Perro();
const miGato = new Gato();

miPerro.makeSound(); // Output: El perro ladra.
miGato.makeSound(); // Output: El gato maulla.

// 8. Implementa un Mixin
const VoladorMixin = {
  volar() {
    console.log(`${this.nombre} está volando.`);
  }
};

class Pato extends Animal {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    Object.assign(this, VoladorMixin);
  }

  makeSound() {
    console.log("El pato cuac-cuac.");
  }
}

const miPato = new Pato("Donald");
miPato.makeSound(); // Output: El pato cuac-cuac.
miPato.volar(); // Output: Donald está volando.

// 9. Crea un Singleton
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // Output: true

// 10. Desarrolla un Proxy
const proxy = {
  get(target, prop, receiver) {
    console.log(`Acceso a la propiedad ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Asignación a la propiedad ${prop}`);
    return Reflect.set(target, prop, value, receiver);
  }
};

const obj = new Proxy({
  prop1: "valor1",
  prop2: "valor2"
}, proxy);

console.log(obj.prop1); // Output: Acceso a la propiedad prop1
obj.prop1 = "nuevo valor"; // Output: Asignación a la propiedad prop
console.log(obj.prop1); // Output:
console.log(obj.prop2); // Output:  
