// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Tiempo finalizado");
      resolve();
    }, segundos * 1000);
  });
}

async function main() {
  try {
    await waitSeconds(3);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

//