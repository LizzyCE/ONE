alert('Hola mundo'); 
/**Palabras reservadas: cons, let, var */

/**Variables */
let numeroSecreto = 3;
let numeroUsuario = prompt("Indica un numero del 1 al 10:");

console.log(numeroUsuario);

/**Este código realiza la comparación */
if (numeroUsuario == numeroSecreto){
    //La condicion se cumplio
    alert(`Acertaste, el numero es ${numeroUsuario}`);

    //La condicion no se cumplio
} else {
    alert('Lo siento, no acertaste el número');
}


