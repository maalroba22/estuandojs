// funciones declarativas se ejecuta donde se mande a llamar.

function suma(){
console.log(2+2)
}

// llamo la funcion..
suma()

/* exprecion de funcioes  la diferencia es que no se ejecuta si se invoca inicialmen*/ 
const sumar = function(){
    console.log(2+5)
}
sumar()
/* 
diferencia entre funciones y metodos */
/* una de las diferenia es que el metodo siempre va acompañado del . */

function multiplicar(a,b){
    let multi = (a*b)
    return multi
}

const eje =multiplicar(5,2)
console.log(eje)

// funciones con parametros por defecto

function saludar(nombre = 'Emanuel',apellido='Romero Villa'){
    console.log(`Hola ${nombre } ${apellido}`)

}
saludar()

//comunicacion entre funciones
loading()
function loading(){
    console.log('cargardo....')
    home()
}

function home(){
    login('mromero')
    console.log('estoy en Home')
}

function login(user){
    console.log(`verificando usuario.. Espere..`)
    console.log(`usuario ${user} Autenticado Exitosamente..`)
}


let total = 0
function agregarCarrito(precio){
    return total +=precio
}
function inpuesto(total){
    return total *1.19
}
total = agregarCarrito(100)
total = agregarCarrito(600)
total = agregarCarrito(300)
console.log(total)

const totalpagar = inpuesto(total)
console.log(`el neto a pagra es ${totalpagar}`)
