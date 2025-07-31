//alert('Hola mundo'); 
/**Palabras reservadas: cons, let, var */

/**Variables */
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

/**Bucle */
while(numeroUsuario != numeroSecreto){
      
    numeroUsuario = parseInt(prompt("Indica un numero del 1 al 10:"));
    console.log(numeroUsuario);

    /**Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto){
        //La condicion se cumplio
        alert(`Acertaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);

        //La condicion no se cumplio
    } else {
        /**If anidado */
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert("El numero secreto es mayor");
        }

        /**Incrementamos el contador cuando no se acierta */
        intentos++;
        //palabraVeces = "veces";
        
        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }

    }
} 


