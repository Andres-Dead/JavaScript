'use strict'

//JavaScript Object Notation (JSON)

//Sirve para hacer arrays asosiativos

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados unidos'
}
//un array con un array anidado
var peliculas = [
    {titulo: "La verdad duele", year:2016, pais: "Francia"},
    pelicula
];


//Se crea una variable que guarde el selector que tenga el id de "peliculas"
var caja_peliculas = document.querySelector("#peliculas");
//Se crea la variable index para numerar los obejtos del arreglo
var index;
//por cada index en peliculas creamos un parrafo
for(index in peliculas){
    //Varibale para crear el parrafo
    var p = document.createElement("p");
    //Concatenamos el parrafo con las el titulo y el año de cada elemento del arreglo
    p.append(peliculas[index].titulo+" - "+ peliculas[index].year);
    //Concatenamos el selector "peliculas" con un parrafo.
    caja_peliculas.append(p);
}