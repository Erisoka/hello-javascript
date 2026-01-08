const entrada = document.getElementById("entrada")
const boton = document.getElementById("boton")
const lista = document.getElementById("lista")

function añadirTarea(){

  if (entrada.value === "") return

  const nuevoElemento = document.createElement("li")
  nuevoElemento.textContent = entrada.value

  nuevoElemento.addEventListener("click", () => {
    nuevoElemento.remove()
  })

  lista.appendChild(nuevoElemento)

  entrada.value = ""
}

boton.addEventListener("click", añadirTarea)

entrada.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
    añadirTarea()
  }
})