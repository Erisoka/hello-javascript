// Manejo del DOM (Document Object Model)

// - Selección de elementos

// Métodos básicos 
// document
// getElementById("id")
// getElementsByClassName("class")
// getElementsByTagName("tag")

// Métodos avanzados
// querySelector(".selecctor")
// querySelectorAll(".selector")

// - Manipulación de elemntos

const title = document.getElementById("title")
title.textContent = "Hola JavaScript!"

const container = document.querySelector(".")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"

// - Modificación de atributos

// Obtencion del atributo
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación de atributo
const hasTarget = link.hasAttribute("target")  // false o true

// Eliminación de atributo
link.removeAttribute("target")

// - Interacción con clases CSS

const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// - Creación y eliminación de elementos

// Creación

const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Inserción en un lugar concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem) // insertar al final del listado
itemsList.prepend(newItem) // insertar al principio del listado
secondItem.before(newItem) // insertat antes de
secondItem.after(newItem) // insertar después de 

// Eliminación

newParagraph.remove()

// Eliminación tradicional

const parent = newParagraph.parentElement  // devuelve el elemento padre
parent.removeChild(newParagraph) // desde el padre, se elimina al hijo

// - Elementos del DOM

function showMsg() {
    alert("Clic!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoader", () => {
    console.log("El DOM está completamente cargado")
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    // Código
})
