/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let raices = [4, 9, 16, 25]
let raicesCuadradas = raices.map(raiz => Math.sqrt(raiz))
console.log(raicesCuadradas) // Output [ 2, 3, 4, 5 ]
let raicesPares = raicesCuadradas.filter(raiz => raiz % 2 === 0)
console.log(raicesPares) // Output [ 2, 4 ]
let sumaRaicesPares = raicesPares.reduce((acumulador, raiz) => acumulador + raiz, 0)
console.log(sumaRaicesPares) // Output 6

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosElevados = numeros.map(numero => Math.pow(numero, 3))
console.log(numerosElevados) // Output [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 ]
let numerosPares = numerosElevados.filter(numero => numero % 2 === 0)
console.log(numerosPares) // Output [ 8, 64, 216, 512, 1000 ]

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let familia = [ ["padres", ["mama", "papa"]], ["hijos", ["hijo1", "hijo2", "hijo3"]], ["nietos", ["nieto1", "nieto2"]]]
console.log(familia) // Output [ [ 'padres', [ 'mama', 'papa' ] ],  [ 'hijos', [ 'hijo1', 'hijo2', 'hijo3' ] ],  [ 'nietos', [ 'nieto1', 'nieto2' ] ] ]
let familiaFlat = familia.flat()
console.log("familiaFlat (1 nivel):", familiaFlat) // Output [  'padres',  [ 'mama', 'papa' ],  'hijos',  [ 'hijo1', 'hijo2', 'hijo3' ],  'nietos',  [ 'nieto1', 'nieto2' ] ]
familiaFlat = familia.flat(2)
console.log("familiaFlat (2 niveles):", familiaFlat) // Output [  'padres', 'mama',  'papa',   'hijos',  'hijo1',  'hijo2',  'hijo3',  'nietos',  'nieto1', 'nieto2' ]
let familiaFlatMap = familia.flatMap(miembro => miembro[1])
console.log("familiaFlatMap:", familiaFlatMap) // Output [  'mama',   'papa',  'hijo1',  'hijo2',  'hijo3',  'nieto1',  'nieto2' ]
familiaFlatMap = familia.flatMap(miembro => miembro[0])
console.log("familiaFlatMap solo con nombres:", familiaFlatMap) // Output [ 'padres', 'hijos', 'nietos' ]

// 4. Ordena un array de números de mayor a menor
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosOrdenados = numeros2.sort((a, b) => b - a)
console.log(numerosOrdenados) // Output [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let set1 = new Set([1, 2, 3, 4, 5])
let set2 = new Set([4, 5, 6, 7, 8])
console.log("Set 1:", set1) // Output { 1, 2, 3, 4, 5 }
console.log("Set 2:", set2) // Output { 4, 5, 6, 7, 8 }
let union = new Set([...set1, ...set2])
console.log("Unión de set1 y set2:", union) // Output { 1, 2, 3, 4, 5, 6, 7, 8 }
let interseccion = new Set([...set1].filter(x => set2.has(x)))
console.log("Intersección de set1 y set2:", interseccion) // Output { 4, 5 }
let diferencia = new Set([...set1].filter(x => !set2.has(x)))
console.log("Diferencia de set1 y set2:", diferencia) // Output { 1, 2, 3 }

// 6. Itera los resultados del ejercicio anterior
console.log("Iteración de los resultados del ejercicio anterior:")
set1.forEach(value => console.log(value)) // Output 1, 2, 3, 4, 5
set2.forEach(value => console.log(value)) // Output 4, 5, 6, 7, 8
union.forEach(value => console.log(value)) // Output 1, 2, 3, 4, 5, 6, 7, 8
interseccion.forEach(value => console.log(value)) // Output 4, 5
diferencia.forEach(value => console.log(value)) // Output 1, 2, 3

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
let usuarios = new Map([
    ["Brais", { edad: 37, email: "brais@mouredev.com" }],
    ["Sara", { edad: 25, email: "sara@example.com" }],
    ["Juan", { edad: 13, email: "juan@example.com" }]
])
console.log("Mapa de usuarios:", usuarios)

usuarios.forEach((info, nombre) => {
    console.log(`Nombre: ${nombre}, Edad: ${info.edad}, Email: ${info.email}`)
})

// 8. Dado el mapa anterior, crea un array con los nombres
let nombres = Array.from(usuarios.keys())
console.log("Array de nombres de usuarios:", nombres)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let emailsMayores = Array.from(usuarios.values())
    .filter(usuario => usuario.edad >= 18)
    .map(usuario => usuario.email)
console.log("Array de emails de usuarios mayores de edad:", emailsMayores)

let emailsSet = new Set(emailsMayores)
console.log("Set de emails de usuarios mayores de edad:", emailsSet)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
let usuariosObjeto = Object.fromEntries(usuarios)
console.log("Objeto de usuarios:", usuariosObjeto)

let usuariosPorEmail = new Map(
    Object.entries(usuariosObjeto).map(([nombre, datos]) => [datos.email, { nombre, ...datos }])
)
console.log("Mapa de usuarios por email:", usuariosPorEmail)