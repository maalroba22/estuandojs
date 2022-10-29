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

const nuevoTitulo = 'soy el nuevo titulo del la pagina'
titulo.innerHTML = nuevoTitulo
titulo.style.color = 'red'


/* agregar o quitar clases con js */
card.classList.add('clase1', 'clase2')
card.classList.remove('clase1')
console.log(card.classList)

/* CREACION DE hTML CON JS */

const nuevoEnlace = document.createElement('A')

//Agregando texto
nuevoEnlace.textContent = 'Nuevo Enlace'
//Añadiendo Enlace
nuevoEnlace.href = '#'

//Agregamos a al Menu
const menu = document.querySelector('.navegacion')
nuevoEnlace.onclick = miAlerta
/* menu.appendChild(nuevoEnlace) */

// otra forma es con la posicion que deseamos
menu.insertBefore(nuevoEnlace, menu.children[1])

function miAlerta() {
    alert('Cordial Saludos, Soy Tu Amigo')
}

// creando una card..

const texto1 = document.createElement('p')
texto1.textContent = 'Concieto'
texto1.classList.add('categoria', 'concierto')

const titulo1 = document.createElement('P')
titulo.textContent = 'Concieto Vallenato'
titulo.classList.add('titulo')

const precio = document.createElement('p')
precio.textContent = ('$1000 x Persona')
precio.classList.add('precio')

//creamos el div
const info = document.createElement('div')
info.classList.add('info')

info.appendChild(texto1)
info.appendChild(titulo1)
info.appendChild(precio)

//crear la imagen

const imagen = document.createElement('img')
imagen.src = '/dom/img/hacer2.jpg'

//crear la card
const cardpadre = document.createElement('div')
cardpadre.classList.add('card')
cardpadre.appendChild(imagen)
cardpadre.appendChild(info)

// insertar en el Html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(cardpadre)


