/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
const objeto = {
  propiedad1: "valor1",
  propiedad2: 42,
  propiedad3: true,
};

// 2. Accede y muestra su valor
console.log(objeto.propiedad1);
console.log(objeto.propiedad2);
console.log(objeto.propiedad3);

// 3. Agrega una nueva propiedad
objeto.propiedad4 = "valor4";
console.log(objeto.propiedad4);
  
// 4. Elimina una de las 3 primeras propiedades
delete objeto.propiedad1;
console.log(objeto);

// 5. Agrega una función e invócala
objeto.funcion = function() {
  return "Esta es una función dentro del objeto";
};
console.log(objeto.funcion());

// 6. Itera las propiedades del objeto
for (let key in objeto) {
  console.log(`${key}: ${objeto[key]}`);
}

// 7. Crea un objeto anidado
const objetoAnidado = {
  nombre: "Carlos",
  edad: 42,
  direccion: {
    calle: "Calle 5 # 11-84",
    barrio: "San Rafael",
    ciudad: "Ciénaga",
    departamento: "Magdalena",
    pais: "Colombia",
  }
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objetoAnidado.direccion.calle);
console.log(objetoAnidado.direccion.barrio);
console.log(objetoAnidado.direccion.ciudad);
console.log(objetoAnidado.direccion.departamento);
console.log(objetoAnidado.direccion.pais);

// 9. Comprueba si los dos objetos creados son iguales
console.log(JSON.stringify(objeto) === JSON.stringify(objetoAnidado)); // false

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.propiedad2 === objetoAnidado.edad); // true