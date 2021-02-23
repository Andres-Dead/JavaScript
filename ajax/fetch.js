'use strict';


//fetch (ajax) y peticiones a servicios /apis rest

//seleccionamos el los elementos con el ID usuarios y los metemos en una variable
var div_usuarios = document.querySelector("#usuarios");


var div_usuario = document.querySelector("#janet");
//crear una variable que reciba un array vacio
//var usuarios = [];

//inciar una promesa donde recibamos la url de donde se consume la api


//Aqui podemos hacer una funcion para llamar la api y aplicarle las promesas
//fetch('https://reqres.in/api/users?page=2')
//llamamos la funcion
    getUsuarios()
    //le decimos que vamos a transformar la data a un .json
    .then(data => data.json())
    //le decimos que pasamos la data y metemos la data en la variable usuarios
    .then(users => {
        //usuarios = users.data;
        //Realizamos un console log para verificar que funcione
        //console.log(usuarios);

        //llamamos la funcion y le mandamos los datos como parametro
        listadoUsuarios(users.data)

        //hacemos una promesa
        return getUser();

        // //usamos el .map para ver cada uno de los elementos de un array
        // usuarios.map((user, i) => {
        //     //creamos una variable local para crear un h3
        //     let nombre = document.createElement('h3');
        //     //concatenamos nuestra variable con el indice (i), el nombre y el apellido de los usuarios
        //     nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
        //     //usamos la variable del div y creamos un nuevo nodo dentro de la estructura DOM
        //     div_usuarios.appendChild(nombre);
        //     //Ocultamos el elemento que tenga la clase loading
        //     document.querySelector(".loading").style.display = 'none';
        // });
    })
    //creamos la promesa
    .then(data=>data.json())
    .then(user=>{
        mostrarUser(user.data);
    });

    //funcion para obtener los datos de las apis
    function getUsuarios(){
        return fetch('https://reqres.in/api/users?page=2');
    }


    //Obetener un usuario concreto
    function getUser(){
        return fetch('https://reqres.in/api/users/2');
    }



    /*Creamos una funcion para ahorrar codigo */
    function listadoUsuarios(usuarios){
        usuarios.map((user,i)=>{
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display='none';
        }); 

    }
    function mostrarUser(user){
            let nombre = document.createElement('h4');
            let avatar = document.createElement('img');
            nombre.innerHTML = user.first_name + " " + user.last_name;
            avatar.src = user.avatar;
            avatar.width = '100';
            div_usuario.appendChild(nombre);
            div_usuario.appendChild(avatar);
            document.querySelector("#janet .loading").style.display='none';
    }