/**
 * @description: Toma el nombre y lo pinta en el h1
 */
nombre = document.querySelector('.nombre')
tehoria = document.querySelector('#tehoria')

nombre.innerHTML = `
    Hola Manuel Romero 
`
const alertica = () => {
    alert('!hola tengo el gusto de informarle que estas aprendiendo js..')
}

tehoria.innerHTML = `
                    <ul class="list-disc">
                            <li>Una constante es un elemento de datos con nombre con un valor predefinido</li>
                            <li>una variable es un elemento de datos con nombre cuyo valor puede cambiar durante el curso de la ejecución de un programa. Las variables pueden ser globales o locales.</li>
                    </ul>
 
 `

/**
 * pinto los metodos mas usado en htlm
 */
metodoString = document.querySelector('.metodoss')
metodoString.innerHTML = `
<h1 class="text-center p-4">Metodos string-- mas usados</h1>
            <hr>
            <ul  class="list-disc m-20 ">
                <li class="font-bold">length : <P class=" font-light font-light tex-xl text-gray-50 ">devuelve la longitud de la cadena.</P></li>
                <li class="font-bold">toUpperCase() : <P class=" font-ligh font-light tex-xl text-gray-50">convierte todos los caracteres de la cadena en mayúsculas y los devuelve.</P></li>
                <li class="font-bold">toLowerCase() : <P class="font-ligh font-light tex-xl text-gray-50"> convierte todos los caracteres de la cadena en minúsculas y los devuelve.</P> </li>
                <li class="font-bold">trim() : <P class="font-ligh font-light tex-xl text-gray-50">elimina los espacios en blanco inicial y final de la cadena</P> </li>
                <li class="font-bold">charAt(index) : <P class="font-light tex-xl text-gray-50">El método charAt devuelve el carácter en el índice dado</P></li>
                <li class="font-bold">slice(startIndex, endIndex) : <P class="font-light tex-xl text-gray-50">El método slice devuelve la subcadena de la cadena de startIndex a endIndex</P></li>
                <li class="font-bold">substr(startIndex, length) : <P class="font-light tex-xl text-gray-50">acepta la longitud de la subcadena que debe extraerse de la cadena original.</P></li>
                <li class="font-bold">replace(substring, newSubstring)):: <P class="font-light tex-xl text-gray-50">  reemplaza la primera instancia del subcadena con nuevaSubCadena.</P></li>
                <li class="font-bold">indexOf(substring): <P class="font-light tex-xl text-gray-50">evuelve el índice inicial de un carácter dado de la cadena</P></li>
            </ul>


`