/*
Clases 75 a 78 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24363
*/

// Expresiones regulares en JavaScript (buscar en google)

// - Sintaxis

const regex = /abc/
const regex2 = RegExp("abc")  // verifica si hay coincidencia ya sea con "a", "ab" o "abc"
const text = "Hola abc JavaScript"

// test: verifica coincidencia con true o false

console.log(regex.test(text))  // true
console.log(regex2.test(text)) // true

const text2 = "Mi edad es 37"
const regex3 = /\d/g          // Busca todas las coincidencias entre [0-9] de forma global (no se detiene)
const regex4 = /[4-6]/        // Busca cualquier digito entre [4-6]
console.log(regex3.test(text2)) // true
console.log(regex4.test(text2)) // false

// replace: reemplaza el texto que coincide con el patrón

const regex5 = /JavaScript/
console.log("Hola JavaScript".replace(regex5, "JS"))
// Output: Hola JS
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(text3.replace(regex3, "[número]"))
// Output: Estoy contando [número] [número] [número] [número] [número] [número] [número]

// exec: retorna detalles de la coincidencia (match)

console.log(regex3.exec(text3))
/* 
[
  '1',
  index: 15,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
*/

while ((match = regex3.exec(text3)) !== null) {
    console.log(match)
}
/* 
[
  '1',
  index: 15,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
[
  '2',
  index: 17,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
[
  '3',
  index: 19,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
[
  '4',
  index: 21,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
[
  '5',
  index: 23,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
[
  '6',
  index: 25,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
[
  '7',
  index: 27,
  input: 'Estoy contando 1 2 3 4 5 6 7',
  groups: undefined
]
*/