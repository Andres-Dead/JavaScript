'use strict'

/*
Las tablas de un numero introducido por el usuario
*/

var numero = parseInt(prompt("De que numero quieres la tabla?", 1));

document.write("<h1> La tabla del "+numero+"</h1>");
// Creamos un ciclo for en el que se ejecutara hasta que i sea 10
//dentro imprimimos en el DOM la opeacion
for(var i = 1; i <= 10; i++){
    document.write(i+ " x "+numero+" = "+(i*numero)+"<br/>");
}
// Creamos un ciclo con otra variable como iterador
for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del "+c+"</h1>");
    //anidamos un for con el iterador "i"
    for(var i = 1; i <= 10; i++){
        //dentro de este realizamos la operacion del ciclo del 1 al 10
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}
