/* seleccionar objeto por su clase */
const header = document.getElementsByClassName('header')
console.log(header)
const hero = document.getElementsByClassName('hero')
console.log(hero)

/* como seleciinar Elementos por su Id */

const formulario = document.getElementById('formulario')
console.log(formulario)

// los selectores anteriores ya casi no se usan..

/* Nuevo selector mas usado en la actualidad */
const card = document.querySelector('.card')

const cards = document.querySelectorAll('.card')

/* accedaer a texto con js */

const titulo = document.querySelector('.contenido-hero h1')

console.log(titulo)

console.log(titulo.innerText) // se trae el html
console.log(titulo.innerHTML) // si el css tiene activo la propiedad visibility_hidden no lo va a mostrar
console.log(titulo.textContent) // si lo va a mostrar
 /* manipular elemntos con el dom */

 const nuevoTitulo ='soy el nuevo titulo del la pagina'
 titulo.innerHTML = nuevoTitulo
