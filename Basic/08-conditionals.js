// Condicionales en JavaScript

// Estructura if...else
let age = 20
if (age >= 18) {
    console.log("Eres mayor de edad.")
} else {
    console.log("Eres menor de edad.")
}

// Estructura if...else if...else
let score = 85  
if (score >= 90) {
    console.log("Calificación: A")
} else if (score >= 80) {
    console.log("Calificación: B")
} else if (score >= 70) {
    console.log("Calificación: C")
} else if (score >= 60) {
    console.log("Calificación: D")
} else {
    console.log("Calificación: F")
}

// Estructura ternaria
let isMember = true
let discount = isMember ? 0.1 : 0.05
console.log("Descuento aplicado:", discount * 100 + "%")

// Estructura switch
let day = 3
switch (day) {
    case 1:
        console.log("Lunes")  
        break
    case 2:
        console.log("Martes") 
        break
    case 3:
        console.log("Miércoles") 
        break
    case 4:
        console.log("Jueves") 
        break
    case 5:
        console.log("Viernes") 
        break
    case 6:
        console.log("Sábado") 
        break
    case 7:
        console.log("Domingo") 
        break 
    default:
        console.log("Día no válido") 
}