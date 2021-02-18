"use strict";

/* 
Calculadora
-Pide dos numeros
-Si ponemos datos erroneos nos volvera a pedir los numeros
-En el cuerpo de la pagina se muestran los resultados
*/

var numero1 = parseInt(prompt("Introduce un numero", 0));
var numero2 = parseInt(prompt("Introduce otro numero", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce un numero", 0));
    numero2 = parseInt(prompt("Introduce otro numero", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + " <br/>" +
    "La resta es: " + (numero1 - numero2) + " <br/>" +
    "La multiplicacion es: " + (numero1 * numero2) + " <br/>" +
    "La división es: " + (numero1 / numero2) + " <br/>";

document.write(resultado);