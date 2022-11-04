

const inactivar = document.querySelector('#btn_enviar')
inactivar.addEventListener('click',validar)

function validar(){
   inactivar.disabled=true
   setTimeout(()=>{
    inactivar.disabled=false
   },10000)
}