'use strict'
function actualizarImagen(){
    const imagen = document.querySelector('.swipe');
    if(window.innerWidth <= 468){
        imagen.src = 'assets/img/swipe2.png'
    }else{
        imagen.src = 'assets/img/swipe.png'
    }
}
window.addEventListener('load', actualizarImagen);
window.addEventListener('resize', actualizarImagen);