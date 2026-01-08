/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

const titulo = document.getElementById("title")
titulo.textContent = "¡Hola Mundo!";

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const image = document.getElementById("myImage")
image.src = "https://scontent.fbaq2-2.fna.fbcdn.net/v/t39.30808-6/612231062_122136701414980592_632626702967189990_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE3iWSmoflobBN4uRzdzNfj5geFqRUDeOrmB4WpFQN46j9mQNWEGp__HHVkpHaNZfE&_nc_ohc=m5Twf-2g8oAQ7kNvwGPVI3h&_nc_oc=AdkKFuk2MrveDCUv8GcYPb0jJ3NEnPzreho-EU8ddyt-qULAcj9FDhtYQ4DtKVwukK4&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&_nc_gid=3soDL9GWjLorxGpcOtrCLw&oh=00_Afp9BGMYbtXcP4SPcfMr2_-LwUcfYWX7VfAaVTEKkQdJcA&oe=69659F97"

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

const box = document.getElementById("box")
box.classList.add("resaltado")

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const parrafo = document.getElementById("paragraph")
parrafo.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const boton = document.getElementById("btn")
const lista = document.getElementById("list")

boton.addEventListener("click", () =>{
  const nuevoElementoLista = document.createElement("li")
  nuevoElementoLista.textContent = "Nuevo elemento"
  lista.appendChild(nuevoElementoLista)
})

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const deleteParagraph = document.getElementById("deleteParagraph")
const deleteBtn = document.getElementById("deleteBtn")

deleteBtn.addEventListener("click", () => {
  deleteParagraph.remove()
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const content = document.getElementById("content")
content.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greetBtn = document.getElementById("greetBtn")
greetBtn.addEventListener("click", () => {
  alert("¡Hola!")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const textInput = document.getElementById("textInput")
const result = document.getElementById("result")

textInput.addEventListener("input", () => {
  result.textContent = textInput.value
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const backgroundBtn = document.getElementById("backgroundBtn")

backgroundBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "gray"
})