/**1. Crea una lista vacía llamada "listaGenerica". */

let listaGenerica = [];

/**2. Crea una lista de lenguajes de programación llamada 
 * "lenguagesDeProgramacion con los siguientes elementos: 
 * 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. 
 * 
 * 3. Agrega a la lista "lenguagesDeProgramacion los 
 * siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang'];

/**4. Crea una función que muestre en la consola todos los 
 * elementos de la lista "lenguagesDeProgramacion. */

function mostrarLenguajes(){
    console.log(lenguajesDeProgramacion);
    return;
}
mostrarLenguajes();

/**5. Crea una función que muestre en la consola todos los 
 * elementos de la lista "lenguagesDeProgramacion en orden
 *  inverso. */

function mostrarInverso(arr){
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
mostrarInverso(lenguajesDeProgramacion);

/**6. Crea una función que calcule el promedio de los 
 * elementos en una lista de números.*/

let calificaciones = [10, 8, 9];
let suma = 0;

function promedio(){
    for (let a = 0; a<calificaciones.length; a++){
        suma += calificaciones[a];
    }
   
    let calcular = suma/calificaciones.length;
    console.log(`Promedio: ${calcular}`);

    return;

}
promedio();

/**7. Crea una función que muestre en la consola el número 
 * más grande y el número más pequeño en una lista.*/

function mostrarNumeros(){
    let array = [10, 9, 8, 7];
    let mayor = Math.max(...array);
    let menor = Math.min(...array);

    console.log("Numero grande: ", mayor);
    console.log("Numero menor: ",menor );
    return;
}

mostrarNumeros();

/**8. Crea una función que devuelva la suma de todos los 
 * elementos en una lista. */



function sumaNumeros(){

    let numerosSumar = [10, 8, 9, 8];
    let suma1 = 0;
    for (let b = 0; b<numerosSumar.length; b++){
        suma1 += numerosSumar[b];
    }
       console.log(suma1);
    return;

}
sumaNumeros();

/**9. Crea una función que devuelva la posición en la lista 
 * donde se encuentra un elemento pasado como parámetro, 
 * o -1 si no existe en la lista. */

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

/**10. Crea una función que reciba dos listas de números del
 *  mismo tamaño y devuelva una nueva lista con la suma de 
 * los elementos uno a uno. */

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultadores = sumarListas(lista1, lista2);
console.log(resultadores);  

/**11. Crea una función que reciba una lista de números y 
 * devuelva una nueva lista con el cuadrado de cada número. */

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  

