/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// 2. Añade un método a la clase que utilice las propiedades
class PersonaConMetodo {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new PersonaConMetodo("Ana", 30);
persona1.saludar(); // Output: Hola, soy Ana y tengo 30 años.

// 4. Añade un método estático a la primera clase
class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

// 5. Haz uso del método estático
console.log(Matematica.sumar(5, 3)); // Output: 8

// 6. Crea una clase que haga uso de herencia
class Empleado extends Persona {
  constructor(nombre, edad, puesto) {
    super(nombre, edad);
    this.puesto = puesto;
  }

  describir() {
    console.log(`Soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.puesto}.`);
  }
}

const empleado1 = new Empleado("Luis", 28, "Desarrollador");
empleado1.describir(); // Output: Soy Luis, tengo 28 años y trabajo como Desarrollador.

// 7. Crea una clase que haga uso de getters y setters
class Rectangulo {
  #ancho;
  #alto;
  constructor(ancho, alto) {
    this.#ancho = ancho;
    this.#alto = alto;
  }
  get area() {
    return this.#ancho * this.#alto;
  } 
  set ancho(nuevoAncho) {
    this.#ancho = nuevoAncho;
  }
  set alto(nuevoAlto) {
    this.#alto = nuevoAlto;
  }
}
const rectangulo1 = new Rectangulo(5, 10);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log(rectangulo1.area); // Output: 50
rectangulo1.ancho = 7;
rectangulo1.alto = 12;
console.log(rectangulo1.area); // Output: 84

// 9. Utiliza los get y set y muestra sus valores
console.log(rectangulo1.area); // Output: 84

// 10. Sobrescribe un método de una clase que utilice herencia 
class Gerente extends Empleado {
  constructor(nombre, edad, puesto, departamento) {
    super(nombre, edad, puesto);
    this.departamento = departamento;
  }
  describir() {
    console.log(`Soy ${this.nombre}, tengo ${this.edad} años, trabajo como ${this.puesto} y soy gerente del departamento de ${this.departamento}.`);
  }
}

const gerente1 = new Gerente("Carlos", 40, "Gerente", "Desarrollo");
gerente1.describir(); // Output: Soy Carlos, tengo 40 años, trabajo como Gerente y soy gerente del departamento de Desarrollo.