/* 1. Crear una función que muestre "¡Hola, mundo!" en la 
consola.*/


function holaMundo(){
    console.log("Hola mundo");
    return;  
}
 holaMundo();  

/**2. Crear una función que reciba un nombre como parámetro y 
 * muestre "¡Hola, [nombre]!" en la consola.*/

function miNombre(nombre){
    console.log(`¡Hola ${nombre}!`);
    return nombre;
}
miNombre("Lizbeth");


/**3. Crear una función que reciba un número como parámetro
 *  y devuelva el doble de ese número. */

function dobleNumero(primero){
     return primero * 2;
}
console.log(dobleNumero(5));

/**4. Crear una función que reciba tres números como 
 * parámetros y devuelva su promedio. */

function tripleNumber(uno, dos, tres){
    let promedio = (uno + dos + tres)/3;
    return promedio;
}

console.log(tripleNumber(10, 8, 7));

/**5. Crear una función que reciba dos números como 
 * parámetros y devuelva el mayor de ellos. */

function valorMayor(primer, segundo){
    if(primer > segundo){
        return primer;
    }else{
        return segundo;
    }
}

console.log(valorMayor(10,15));

/**6. Crear una función que reciba un número como parámetro 
 * y devuelva el resultado de multiplicar ese número por 
 * sí mismo. */

function multNumero(first){
    return first * first;
}

console.log(multNumero(5));