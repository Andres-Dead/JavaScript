'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("introduce un numero",0));
var numero2 = parseInt(prompt("introduce otro numero",0));


//Para recorrer todos los numeros usamos un while
while(numero1 < numero2){
    numero1++

    //Para comprobar si los numeros son impares usamos un if
    //Se entenderia como "si lo que resta de la division de numero entre 2 es diferente a cero entonces: "

    if(numero1%2 != 0){
        document.write("<h3> El numero: "+numero1+" es impar </h3>");
    }   
}