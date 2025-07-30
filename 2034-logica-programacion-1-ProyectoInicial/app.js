//alert('Hola mundo'); 
/**Palabras reservadas: cons, let, var */

/**Variables */
let numeroSecreto = 3;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

/**Bucle */
while(numeroUsuario != numeroSecreto){
      
    numeroUsuario = prompt("Indica un numero del 1 al 10:");
    console.log(numeroUsuario);

    /**Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto){
        //La condicion se cumplio
        alert(`Acertaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);

        //La condicion no se cumplio
    } else {
        /**If anidado */
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert("El numero secreto es mayor");
        }

        /**Incrementamos el contador cuando no se acierta */
        intentos = intentos + 1;
        palabraVeces = "veces";
    }
}


