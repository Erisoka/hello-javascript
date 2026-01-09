/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const email = "mouredev@gmail.com"
console.log(`¿Es válido el email ${email}?`, emailRegex.test(email))

// 2. Crea una RegEx obtenga Hashtags de un Texto

const text = "Hoy estamos aprendiendo #JavaScript y #Regex con @mouredev"
const hashtagRegex = /#\w+/g

console.log("Hashtags encontrados:", text.match(hashtagRegex))

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)

// Usamos "Lookaheads" (?=...) para verificar condiciones sin consumir caracteres
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

const password = "Password123"
console.log(`¿Es segura la contraseña ${password}?`, passwordRegex.test(password))

// NOTA: Aplícalas utilizando diferentes operaciones