'use strict'

/*
Que nos diga si un numero es par o impar
- Mostrat ventana prompt
- Si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt("introduce un numero",0));

//Mientras que number no sea un numero se seguira pidiendo un numero entero
while(isNaN(number)){
    number = parseInt(prompt("Ingresa un numero por favor",0));
}

//si el residuo de la division de number entre 2 es cero
//Se imprime es par
if(number % 2 == 0){
    alert("el numero es par");
}else{
    //si no se imprime es impar
    alert("Es impar");
}