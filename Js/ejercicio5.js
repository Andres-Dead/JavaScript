'use strict'

/*
Muestra todos los numeros divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt("Mete un numero", 1));


//usamos For para decir que i es igual a 1 y mientras i sea menor al numero, i aumentará en uno
for (var i = 1; i <= numero; i++) {
    //Si el residuo de la division de numero entre i es igual a cero se cuenta como divisor por lo tanto se guarda en i
    //se imprime i
    if (numero % i == 0) {
        document.write("<h4>Su divisor es: " + i);
    }
}