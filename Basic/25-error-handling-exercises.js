/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
  let resultado = 10 / 0;
  if (!isFinite(resultado)) {
    throw new Error("División por cero no permitida");
  }
} catch (error) {
  console.error("Error capturado:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
  let resultado = 10 / 0;
  if (!isFinite(resultado)) {
    throw new Error("División por cero no permitida");
  }
} catch (error) {
  console.error("Error capturado:", error.message);
} finally {
  console.log("Operación finalizada.");
}

// 3. Lanza una excepción genérica
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
}
try {
  dividir(10, 0);
} catch (error) {
  console.error("Error al dividir:", error.message);
}

// 4. Crea una excepción personalizada
class ValorNegativoError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ValorNegativoError";
  }
}

// 5. Lanza una excepción personalizada
function validarNumeroPositivo(numero) {
  if (numero < 0) {
    throw new ValorNegativoError("El número debe ser positivo");
  }
}
try {
  validarNumeroPositivo(-5);
} catch (error) {
  console.error("Error de validación:", error.message);
}

// 6. Lanza varias excepciones según una lógica definida
function verificarValor(valor) {
  if (typeof valor !== "number") {
    throw new TypeError("El valor debe ser un número");
  }
  if (valor < 0) {
    throw new ValorNegativoError("El valor debe ser positivo");
  }
}

// 7. Captura varias excepciones en un mismo try-catch
try {
  verificarValor("texto");
} catch (error) {
  console.error("Error capturado:", error.message);
}
try {
  verificarValor(-10);
} catch (error) {
  console.error("Error capturado:", error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10.5", "20.3", "texto", "30.1", "NaN", "40.2"];
for (const valor of valores) {
  try {
    parseFloat(valor);
  } catch (error) {
    console.error("Error al convertir:", error.message);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadFaltanteError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "PropiedadFaltanteError";
  }
}

function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new PropiedadFaltanteError(`La propiedad "${propiedad}" falta en el objeto`);
  }
}

try {
  const persona = { nombre: "Juan", edad: 25 };
  verificarPropiedad(persona, "direccion");
} catch (error) {
  console.error("Error de propiedad:", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function funcionConError() {
  if (Math.random() < 0.7) {
    throw new Error("Error aleatorio");
  }
  return "Éxito";
}
function reintentarFuncion(funcion, maxReintentos) {
  let intentos = 0;
  while (intentos < maxReintentos) {
    try {
      return funcion();
    } catch (error) {
      intentos++;
      console.warn(`Intento ${intentos} fallido: ${error.message}`);
    }
  }
  throw new Error("Máximo de reintentos alcanzado");
}
try {
  const resultado = reintentarFuncion(funcionConError, 10);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Error final:", error.message);
} 
// Resumen: Este código implementa varios ejercicios de manejo de errores en JavaScript, incluyendo la captura de excepciones, el lanzamiento de excepciones genéricas y personalizadas, y la implementación de lógica para reintentos en caso de error.