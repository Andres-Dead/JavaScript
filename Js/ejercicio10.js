'use strict'


//este metodo sirve para escuchar todos los eventos que pongamos en el documento
window.addEventListener('load', function(){
    console.log("DOM cargado");
    //Creamos variables que seleccionen lo elementos del DOM que tengan la ID puesta
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    //Ocultamos el lugar donde se mostraran los datos del usuario mientras no demos click en enviar
    box_dashed.style.display = "none";

    //Creamos un metodo para escuchar cuando se de click en submit y le ponemos una función vacia
    formulario.addEventListener('submit', () => {
        console.log("evento submit capturado")
        

        //Guardamos los elementos ingresados por el usuario dentro de variables
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        
        if(nombre.trim() == null || nombre.trim().lenght == 0){
            alert("El nombre no es valido");
            console.log("culo");
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().lenght == 0){
            alert("Los apellidos no es valido");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valido");
            return false;
        }

        
        //mostramos el lugar donde se muestran los datos del usuario
        box_dashed.style.display = "block";
        //Metemos los datos del usuario en un arreglo(Array)
        var datos_usuario = [nombre, apellidos, edad];
        //Creamos la variable local indice para usarla como dummy
        var indice;

        //Creamos un ciclo for que nos diga que por indice en el arreglo vamos a crear un parrafo
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            //aqui juntamos el parrafo con el arreglo de los datos
            parrafo.append(datos_usuario[indice]);
            //aqui juntamos donde se muestran los datos con el parrafo
            box_dashed.append(parrafo);
        }
        
    });



});