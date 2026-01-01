/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const colores = ["rojo", "verde", "azul"];
const [primero, segundo] = colores;
console.log(primero);
console.log(segundo);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const numeros = [1, 2];
const [a, b = 0] = numeros;
console.log(a);
console.log(b);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Bogotá"
};
const { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const { nombre: n, edad: e } = persona;
console.log(n);
console.log(e);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const persona2 = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Bogotá",
  trabajo: {
    titulo: "Desarrolladora",
    empresa: "Tech Co"
  }
};
const { trabajo: { titulo, empresa } } = persona2;
console.log(titulo);
console.log(empresa);

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = [...array1, ...array2];
console.log(combinado);

// 7. Usa propagación para crear una copia de un array
const originalArray = [1, 2, 3];
const copiaArray = [...originalArray];
console.log(copiaArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinadoObjetos = { ...obj1, ...obj2 };
console.log(combinadoObjetos);

// 9. Usa propagación para crear una copia de un objeto
const originalObjeto = { a: 1 };
const copiaObjeto = { ...originalObjeto };
console.log(copiaObjeto);

// 10a Combina desestructuración y propagación 
const persona3 = {
  nombre: "Sofía",
  edad: 25,
  ciudad: "Bogotá"
};
const { nombre: n3, edad: e3 } = persona3;
const copiaPersona3 = { ...persona3, nombre: n3, edad: e3 };
console.log(copiaPersona3);

// 10b. Combina desestructuración y propagación  para crear una función que acepte un objeto como parámetro,
//     desestructure dos propiedades y use propagación para capturar el resto de las propiedades en otro objeto
function mostrarPersona({ nombre, edad, ...resto }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  console.log("Resto de propiedades:", resto);
}
const persona4 = {
  nombre: "Carlos",
  edad: 42,
  ciudad: "Santa Marta",
  profesion: "Ingeniero"
};
mostrarPersona(persona4);
