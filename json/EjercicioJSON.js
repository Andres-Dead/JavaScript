'use strict'

/*
Formulario que capture las pelicuas en el localstorage
*/

//Seleccionar el formulario y meterlo en una variable
var formulario = document.querySelector("#formpeliculas");
//Crear un evento que escuche el submit y crear una funcion de callback
formulario.addEventListener('submit', () =>{
    console.log("xd")
    var titulo = document.querySelector('#addpelicula'  ).value;
    
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculaslista");

for( var i in localStorage){
    console.log(localStorage[i]);
    
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
   
}


var formulariob = document.querySelector("#formborrarPeliculas");
//Crear un evento que escuche el submit y crear una funcion de callback
formulariob.addEventListener('submit', () =>{
    console.log("xd")
    var titulo = document.querySelector('#borrarpelicula'  ).value;
    
    if(titulo.length >= 1){
        localStorage.removeItem(titulo, titulo);
    }
});
