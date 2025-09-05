/**1. Crea una función que calcule el índice de masa corporal
 *  (IMC) de una persona a partir de su altura en metros 
 * y peso en kilogramos, que se recibirán como parámetros. */

function medirIMC(estatura, pesokg){
   let imc = pesokg/(estatura * estatura);
   return imc;
}
   console.log(medirIMC(1.50, 57));

/**2. Crea una función que calcule el valor del factorial 
 * de un número pasado como parámetro. */

function factorial(a){
    let fact = 1;
    for (b = a; b > 0; b--){
        fact = fact * b;
    }
    return fact;
}
   console.log(factorial(5));

/**3. Crea una función que convierta un valor en dólares, 
 * pasado como parámetro, y devuelva el valor equivalente 
 * en reales(moneda brasileña,si deseas puedes hacerlo con 
 * el valor del dólar en tu país). Para esto, considera la 
 * cotización del dólar igual a R$4,80. */

function convertirDolar(dolar){
    let monedaMexico = 20;
    return monedaMexico * dolar;
}
   console.log(convertirDolar(6));

/**4. Crea una función que muestre en pantalla el área y 
 * el perímetro de una sala rectangular, utilizando la altura 
 * y la anchura que se proporcionarán como parámetros. */

function rectangular(altura, ancho){
    let perimetro = 2*(ancho + altura);
    let area = ancho * altura;

    console.log(perimetro);
    console.log(area);

    return;
}
 rectangular(5,6);

/**5. Crea una función que muestre en pantalla el área y el 
 * perímetro de una sala circular, utilizando su radio que 
 * se proporcionará como parámetro. Considera Pi = 3,14. */

function circulo(radio){
    let pi = 3.14;
    let perimetro1 = 2*pi*radio;
    let area1 = pi*(radio*radio);

    console.log(perimetro1);
    console.log(area1);

    return;
}
 circulo(10);

/**6. Crea una función que muestre en pantalla la tabla
 *  de multiplicar de un número dado como parámetro. */

function tablaMultiplicar(ab){
     let mult;
     for (i = 0; i<=10; i++){
        mult = ab*i;
        console.log(`${ab} x ${i} = ${mult}`)
     }
     return mult;
}
 tablaMultiplicar(10);