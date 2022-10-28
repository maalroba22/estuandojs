

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'
    , 'Mayo', 'Abril', 'Jinio', 'Julio', 'Agosto']

// tamaño de mi array
const tamaño = meses.length
console.log('El tamaño del Array es : ' + tamaño)

/* modificar un array */
const nuevomes = meses[0] = 'mes inicial'
meses.push('mes nuevo')

const carrito = []

const productos = {
    nombre: 'Televisor de 50pg',
    valor: 100000
}
const producto2 = {
    nombre: 'Labadora 2 puesto',
    valor: 5000
}

carrito.push(productos)
carrito.push(producto2)
console.table(carrito);

/**
 * @description 'Forma imperativa'
 */

let carrito2 = [...carrito, productos, producto2]
console.table(carrito2)

/* eliminar elemento de un carrito */
carrito2.pop()
console.table(carrito2)
carrito2.shift()
console.table(carrito2)

/**
 * destructurin en Array
 */

 const numero = [10, 20, 30, 40, 50, 70, 80, 100]

 const [primero]=numero
 const [, , tercero] = numero
 const [primerop,segundop,...tercerop] = numero

 console.table(numero)
 console.log(primero)
 console.log(tercero)
 console.log(tercerop)


//rrecorrer array con el for
for (let i = 0; i < meses.length; i++) {
    const element = meses[i];
    console.log(element)
}

// forecch No crea un nuevo arreglo

const listaFamilia = [
    {nombre:'Manuel',apellido:'Romero',edad:33},
    {nombre:'Inelsa',apellido:'Villa',edad:35},
    {nombre:'Ximena',apellido:'Romero',edad:4},
    {nombre:'Emanuel',apellido:'Romero',edad:2},
]

listaFamilia.forEach(function(f){
    console.log(`nombre: ${f.nombre} edad: ${f.edad}`)
})

// map crea un arreglo nuvo return un array
const familia = listaFamilia.map((f)=>{
    return  (`nombre: ${f.nombre} edad: ${f.edad}`)
    
})

console.log(familia)

