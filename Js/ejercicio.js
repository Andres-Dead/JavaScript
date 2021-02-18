'use strict'

/*
Programa que nos pida dos numeros y que nos diga cual es mayor, el menor y si son iguales

Además: Si los numeros no son un numero o son menores o iguales a 0 nos los vuelva a pedir
*/

//Pedir datos al usuario y convertir el valor a entero con parseint
var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));


//evaular la condicion para que sea correcto
// numeros son menores o iguales a cero o no son numeros se vuelven a pedir los datos
while (numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));

}

//comparar numeros

if (numero1 == numero2) {
    alert("Los numeros son iguales");
} else if (numero1 > numero2) {
    alert("El numero mayor es: " + numero1 + " y el numero menor es: " + numero2);
} else if (numero1 < numero2) {
    alert("El numero mayor es: " + numero2 + " y el numero menor es: " + numero1);
} else {
    alert("introduce un numero");
}