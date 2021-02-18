'use strict'

/*
Progama que pida
-6 numeros en pantalla y los meta a un array
-Muestra el array entero (Todos los elementos en el DOM y consola)
-Ordenar el array y mostrarlo
-Invertir su orden y mostrarlo
-Mostrat cuantos elementos tiene el array
-Busqueda de un valor introducido por el usuario que nos diga si esta  y su indice
*/

//Vamos a crear una funcion para mostrar el array y hacer un codigo más pequeño
function muestraArray(elementos, textoCustom=""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>" + elemento + "</strong> <br/>");
    });

}


//PRimero creamos la variable con un array vacio
//Tambien podemos definir cuantos espacios tendra el array
//Si hicieramos la variable con un array vacio se veria así
//var numeros = [];

var numeros = new Array(6);

//En este ciclo for hacemos que i se nuestro contador
//Mientras que i sea menor o igual a 5 entonces se incrementara en uno
//La variable i representa el valor de la pocision en la que estamos dentro del array
//Por lo tanto pediremos los numeros 6 veces
for (var i = 0; i <= 5; i++) {

    //Con el array vacio hariamos el siguiente procedimiento
    //numeros.push(parseInt(prompt("introduce un numero", 0)));
    numeros[i] = parseInt(prompt("introduce un numero", 0));
}

//Mostrar en el body
muestraArray(numeros);
//document.write("<h1>Contenido del array</h1>");
//Usando forEach estamos diciendo que por cada elemento del arreglo se va a mostar en pantalla
//numeros.forEach((numero, index) => {
//    document.write("<strong>" + numero + "</strong> <br/>");
//});

//Mostramos array por consola
console.log(numeros);

//Ordenar el array y mostrarlo
//Con el callback se ordenan de manera numerica 
numeros.sort(function(a,b){return a-b});
muestraArray(numeros, "ordenado");

//Ivertir y mostrar
numeros.reverse();
muestraArray(numeros, "Invertido");

//Contar espacios en el array
document.write("<h1>El array tiene: "+numeros.length+" elementos");

//Buscar elemento dentro del array
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
    document.write("No encontrado");
}

