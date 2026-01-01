// Manejo de errores en JavaScript

// El manejo de errores es crucial para crear aplicaciones robustas. JavaScript proporciona varias formas de manejar errores, incluyendo try...catch, throw y finally.

// Ejemplo básico de try...catch
try {
  // Código que puede lanzar un error 
  let resultado = 10 / 0;
  if (!isFinite(resultado)) {
    throw new Error("División por cero no permitida");
  } 
  console.log("Resultado:", resultado);
} catch (error) {
  // Manejo del error
  console.error("Se produjo un error:", error.message);
} finally {
  // Código que se ejecuta siempre
  console.log("Operación finalizada.");
}

// Función que valida un número positivo
function validarNumeroPositivo(numero) {
  if (typeof numero !== "number") {
    throw new TypeError("El valor debe ser un número");
  }
  if (numero < 0) {
    throw new RangeError("El número debe ser positivo");
  }
  return true;
}

// Uso de la función con manejo de errores
try {
  validarNumeroPositivo(-5);
} catch (error) {
  console.error("Error de validación:", error.message);
} 
try {
  validarNumeroPositivo("texto");
} catch (error) {
  console.error("Error de validación:", error.message);
}

// Resumen: Este código demuestra cómo manejar errores en JavaScript utilizando try...catch, throw y finally, así como la creación de errores personalizados para validación de datos.