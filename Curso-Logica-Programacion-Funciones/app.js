let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //Buena practica
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1; 
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');
