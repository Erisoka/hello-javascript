/*
Clase 44 - Módulos 
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/

// Módulos externos

const os = require("os")

console.log(`Sistema Operativo: ${os.type()} ${os.release()}`)
console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())