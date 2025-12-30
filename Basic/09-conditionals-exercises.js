/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Leonidas"
if (nombre === "Leonidas") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin"
let contraseña = "123456"
if (usuario === "admin" && contraseña === "123456") {
    console.log("Acceso concedido.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 5
if (numero > 0) {
    console.log("El número es positivo.")
} else if (numero < 0) {
    console.log("El número es negativo.")
} else {
    console.log("El número es cero.")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 17
if (edad >= 18) {
    console.log("Puedes votar.")
} else {
    console.log("No puedes votar. Te faltan " + (18 - edad) + " años.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 = 25
let estado = edad2 >= 18 ? "adulto" : "menor"
console.log("La persona es " + estado + ".")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Marzo"
if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
    console.log("Estamos en invierno.")
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
    console.log("Estamos en primavera.")
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
    console.log("Estamos en verano.")
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
    console.log("Estamos en otoño.")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre" || mes === "Diciembre") {
    console.log(mes + " tiene 31 días.")
} else if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
    console.log(mes + " tiene 30 días.")
} else if (mes === "Febrero") {
    console.log(mes + " tiene 28 o 29 días.")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español"
switch (idioma) {
    case "español":
        console.log("¡Hola!")
        break
    case "inglés":
        console.log("Hello!")
        break
    case "francés":
        console.log("Bonjour!")
        break
    default:
        console.log("¡Hola!")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Estamos en invierno.")
        break
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Estamos en primavera.")
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Estamos en verano.")
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Estamos en otoño.")
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log(mes + " tiene 31 días.")
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log(mes + " tiene 30 días.")
        break
    case "Febrero":
        console.log(mes + " tiene 28 o 29 días.")
        break
}