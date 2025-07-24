alert("Bienvenida y bienvenido a nuestro sitio web");

let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert('Error en todos los campos');

let mensajeDeError= '¡Error! Completa todos los campos';
alert(mensajeDeError);

nombre = prompt('Ingresa el nombre');
edad = prompt('Ingresa tu edad: ');
edad = Number(edad);

if (edad >= 18){
    alert('¡Puedes obtener tu licencia de conducir!');
}