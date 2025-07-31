/**1. Crea un contador que comience en 1 y vaya hasta 
 * 10 usando un bucle 'while'. Muestra cada número. */

let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador++; 
}

/**2. Crea un contador que comience en 10 y vaya hasta 0 
 * usando un bucle 'while'. Muestra cada número. */
let contador1 = 10;

while(contador1 >= 0){
    console.log(contador1);
    contador1--;
}

/**3. Crea un programa de cuenta regresiva. Pide un número 
 * y cuenta desde 0 hasta ese número utilizando un bucle 
 * 'while' en la consola del navegador. */

let numero = prompt("Ingresa un numero: ");

while(numero >= 0){
    console.log(numero);
    numero--;
}

/**4. Crea un programa de cuenta progresiva. Pide un número 
 * y cuenta desde 0 hasta ese número utilizando un bucle 
 * 'while' en la consola del navegador. */

let numero1 = prompt("Ingresa un numero: ");
let contador2 = 0;

while(contador2 <= numero1){
    console.log(contador2);
    contador2++;
}