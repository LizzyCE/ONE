/**Ejercicio 1 :Pregunta al usuario qué día 
de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/

let diaSemana = prompt ("¿Cuál es el día de la semana?");

if(diaSemana == 'Sabado' || diaSemana == 'Domingo'){
   
    console.log("¡Buen fin de semana!");
} else {
    console.log("¡Buena Semana!");
}

/**2. Verifica si un número ingresado por el usuario es 
 * positivo o negativo. Muestra una alerta informativa. */
let numero = prompt("Ingresa un numero: ");

if(numero > 0){
    alert("Numero positivo");
}else if(numero < 0){
    alert("Numero negativo");
}else{
    alert("Es cero");
}

/**3. Crea un sistema de puntuación para un juego. Si la 
 * puntuación es mayor o igual a 100, muestra 
 * "¡Felicidades, has ganado!". En caso contrario, muestra
 *  "Intentalo nuevamente para ganar.". */
let puntuacion = prompt ("Puntuacion:");

if(puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar");
}

/**4. Crea un mensaje que informe al usuario sobre el saldo de
 *  su cuenta, utilizando un template string para incluir 
 * el valor del saldo. */
let saldo = prompt("Ingresa tu valor: ");

alert(`Tu saldo es de ${saldo}`);

/**5. Pide al usuario que ingrese su nombre mediante un prompt. 
 * Luego, muestra una alerta de bienvenida usando ese nombre.*/
let nombreUsuario = prompt("Ingresa tu nombre: ");

alert(`¡Bienvenida ${nombreUsuario}!`);