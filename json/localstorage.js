'use strict'

//LocalStorage
//sirve para guardar informacion en el navegador a modo de sesion
//Y que se quede mientras navegamos dentro de nuestra app web

/*
Para ver si el navegador es compatible
hacemos lo siguiente
*/

// if(typeof(Storage) !== 'undefined'){
//     console.log("LocalStorage disponible");
// } else{
//     console.log("Incompatible con LocalStorage");
// }

//Guardar datos en localstorage

localStorage.setItem("titulo", "Javascript");


// Conseguir elemento 


//Guardar un string
// console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar un objeto

//El objeto lo debemos convertir en un objeto json string
var usuario = {
    nombre: "Andres Marquez",
    email: "andresmt.utj@gmail.com",
    web:"amarquez.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Conseguir objeto
//Debemos convertilo a objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" "+userjs.web+" "+userjs.nombre);

//borrar datos del LocalStorage

localStorage.removeItem("usuario");

//Limpiar el local storage
localStorage.clear();

