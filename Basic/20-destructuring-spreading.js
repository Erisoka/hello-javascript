// Destructuring and Spreading in JavaScript (desestructuración y propagación)

// Destructuring arrays
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(primero);
console.log(segundo);
console.log(resto);

// Destructuring objects
const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Bogotá",
  job: {
    title: "Desarrolladora",
    empresa: "Tech Co",
    work: function() {
      return this.title + " is working.";
    }
  }
};
const { nombre, edad, ciudad } = persona;
console.log(nombre);
console.log(edad);
console.log(ciudad);

const { nombre: n, edad: e } = persona;
console.log(n);
console.log(e);

const { nombre: name, job: { title, empresa } } = persona;
console.log(name);
console.log(title);
console.log(empresa);
console.log(persona.job.work());

// Spreading arrays (...)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado);

// Spreading objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinadoObj = { ...obj1, ...obj2 };
console.log(combinadoObj);

const personaActualizada = { ...persona, edad: 31, ciudad: "Medellín", email : "ana@techco.com"};
console.log(personaActualizada);

// Function with destructured parameters
function mostrarPersona({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
mostrarPersona(persona);

// Function with rest parameters
function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
console.log(sumar(1, 2, 3, 4, 5));

// Summary: This code demonstrates destructuring and spreading in JavaScript for arrays and objects, as well as using these techniques in function parameters.