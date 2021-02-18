'use strict'
 
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un numero",0));
var numero2 = parseInt(prompt("Introduce otro numero", 0));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros</h1>");

//Nuestro ciclo for nos dice que:
//La variable local i es igual a numero1
//mientras i sea menor o igual a numero2
//se incrementara i en 1
for (var i = numero1; i<= numero2; i++){
    //mandamos a imprimir los numeros entre numero1 y numero 2
    document.write(i+"<br/>");
}