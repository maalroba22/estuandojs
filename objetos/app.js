


/**
 * creando primer objeto y agregando atributos
 */

const producto = {
    nombre: 'Arroz',
    precio: 2500,
    stock: 50
}



// Agregar una imagen al objeto
producto.imagen = 'manuel.jpg'

// Eliminar la propiedad staock
delete producto.stock

/**
 * Destructuring de Objeto
 */
/* const { nombre, precio, stock } = producto
console.log(nombre)
console.log(producto) */

// objetos dentro de un pbjeto...

const persona = {
    nombre: 'Manuel',
    apellido: 'Romero',
    informacion: {
        medidas: {
            peso: '95kg',
            talla: '75cm'
        },
        datos: {
            telefono: 312333,
            email: 'maalroba22@miail.co'
        }
    }
}

const {nombre,informacion,informacion:{medidas:{peso,talla}}}=persona
console.log(persona.informacion.datos.email)
console.log(informacion)
console.log(talla)

/**
 * @description: 'Unificar objetos;
 */

const cliente = {
    nombres:'cliente 1',
    apellidos:'apeec1'
}
const dtcliente ={
    direccion:'magangue',
    telefono:3123546,
    email:'email@email.com'
}

const resultado = Object.assign(cliente,dtcliente)
console.log(resultado)
// uniendo con Spread Operator

const resul= {...cliente,...dtcliente}
console.log(resul)

// this dentro de los objetos
const animal ={
    nombre:'caicer',
    raza:'pitbull',
    mostrarPerro:function(){
        console.log(`el perro: ${this.nombre} es de raza: ${this.raza}`)
    }
}
animal.mostrarPerro()


/**
 * @description: 'objet Constuctor'
 */

function Producto(nombre,precio){
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true
}

const product = new Producto('carro',500)
console.log(product)
