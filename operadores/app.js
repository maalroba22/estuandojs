
const metodoPago = 'cheque'

switch (metodoPago) {
    case 'efectivo':
        console.log(`Haz pagado con el metodo de pago: ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`Haz pagado con el metodo de pago: ${metodoPago}`)
        break;
    case 'tarjeta':
        console.log(`Haz pagado con el metodo de pago: ${metodoPago}`)
        break;
    default:
        console.log(`Metodo de pago no Valido`)
        break;
}


/**
 * @description : 'operador &&
 */

const usuario = true
const puedePagar = true

if (usuario && puedePagar) {
    console.log('Ya puedes Realizar tu Compra')
} else if (!usuario) {
    console.log('debes Registrar Una cuenta.')
} else if (!puedePagar) {
    console.log('Fondos infuficiente para realizar el pago')
} else {
    console.log('No puedes Pagar')
}

// uso de los ternarios:

usuario  && puedePagar ? console.log("Puede Pagar"): console.log("No puede Pagar")


