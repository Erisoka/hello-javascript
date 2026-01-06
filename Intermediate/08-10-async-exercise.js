// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let balance = 500;

async function checkBalance() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(balance);
    }, 1000);
  });
}

async function withdrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (balance >= amount) {
        balance -= amount;
        resolve(balance);
      } else {
        reject("Fondos insuficientes");
      }
    }, 2000);
  });
}

async function main() {
  try {
    console.log("Saldo disponible:", await checkBalance(), "$");
    console.log("Retirando 300$...");
    console.log("Operación exitosa, saldo restante:", await withdrawMoney(300), "$");
    console.log("Retirando 300$...");
    console.log("Saldo restante:", await withdrawMoney(300), "$");
  } catch (error) {
    console.log("Error:", error);
  }
}

main();