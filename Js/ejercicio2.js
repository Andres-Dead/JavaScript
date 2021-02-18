"use strict";

/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducri un numero negativo y ahí mostrar el resultado */

//Creamos dos variables la de la suma y el contador

var suma = 0;
var contador = 0;

//Usamos do while para ejecutar un bloque de codigo antes de ejecutar alguna acción
//Convertimos lo que nos de el usuario a entero
//despues evaluamos si numero es no es una letra(si es una letra convertirla a 0)
//Si numero es mayor o igual a cero entonces añadirle a la variable suma, la suma de suma más el numero para que sea recursivo
//Aunmentamos el contador para poder sacar la media
//todo esto mientas numero sea igual o mayor a cero se ira repitiendo
do {
    var numero = parseInt(
        prompt("Introduce numeros hasta que introduzcas uno negativo", 0)
    );

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        //suma += numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (numero >= 0);
//Para mostrar el resultado de la suma solo mostramos la variable suma
//Para mostrar la media mostramos de operacion de la variable suma entre el contador
alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador));
