
//------------------------BASICO-------------------------

//Type sirve para crear un tipo de dato customizado
//En este caso todo lo que tenga tipo 'alfanumerico'
//Debe aceptar letras y numeros
type alfanumerico = string | number;

//tipo personalizaco
let alfa: alfanumerico = "hola"+1;

//Arrays

//Array que solo recibe string
var lenguajes: Array<string> = ["Java", "TypeScript", "PHP"];

//Array que recibe cualquier tipo de variable

let langs: any[] = ["Spanish", 1 , true ];

//var vs let
//Var es a nivel global y let es a nivel de bloque
//EJEMPLO:
var num1 = 10;
var num2 = 12;

if(num1 == 10){
    //Aqui la variable let solo va ejecutarse dentro de este bloque
    let num1 = 44;
    var num2 = 55;
console.log(num1,num2); //output 44 55
};
//Aqui la varibale var me va a mostrar la última instancia con var de num1 y la última instancia con var de num2
console.log(num1,num2); // output 10 55


//---------------------------------FUNCIONES Y TIPADO------------------------------

function getNumero(numero:number = 5){
    return "el numero es: "+numero;
}
console.log(getNumero(12));//output el numero es: 12

//----------------------------------CLASES-------------------------
//Una clase es algo así como un molde de un objeto
//cada objeto de la misma clase tiene similitudes entre si pues son de la misma clase
//Cada objeto tiene metodos que son las acciones que realiza cada objeto

//Aqui exportamos la clase
//clase
//usamos la interfaz en esta clase con "implements nombreInterfaz"
/*export*/ class Camiseta implements CamisetaBase{
    //public significa que cuando se instancie la clase
    //se van a poder a acceder a todas estas propiedades de la clase desde cualquier lugar
    //protected significa que lo se puede acceder desde donde se definio y desde donde se hereda la clase
    //private los atributos solo son accesibles desde la clase que los define
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

//-----------Constructores---------------
//Es un metodo especial dentro de una clase
//se usa para darle un valor inicial a los atributos del obejeto al crearlo
    constructor(color, modelo, marca, talla, precio ){
        this.color= color;
        this.modelo= modelo;
        this.marca = marca;
        this.talla=talla;
        this.precio=precio;
    }


    //Se crea un metodo para interactuar con las propiedades
    public setColor(color){
        //con this accedemos a esta misma clase
        //.color para acceder a la propiedad
        //Por ultimo = color sirve para guardar lo que nos llegue
        this.color = color; 
    }
    
    public getColor(){
        return this.color;
    }
}
//** se usa el constructor para crear el objeto con la clase/
//Aqui se instancia
var camiseta = new Camiseta("rojo","manga larga","nike", "l", 14);

//Este metodo manda el color que elegi
camiseta.setColor("Rojo");
//Este metodo muestra el color que yo le di
//+++++camiseta.getColor();
//Aqui se modifican las propiedades de la clase para crear un nuevo obejto con la clase
//camiseta.color="Rojo";
//camiseta.modelo="Manga larga";
//camiseta.marca="Nike";
//camiseta.talla="L";
//camiseta.precio=10;

//Un nuevo objeto
//var playera = new Camiseta();
//playera.setColor("azul");
// camiseta.color="Azul";
// camiseta.modelo="Manga corta";
// camiseta.marca="Adidas";
// camiseta.talla="S";
// camiseta.precio=15;

//Aqui ya se crearon dos objetos para la clase camiseta, ambos comparten propiedades
//Pero son distintos uno del otro, aún que siguen siendo ambos camisetas


//--------------------INTERFACES-----------------
//Se definen los metodos y propiedades obligatorias a una clase
//Por lo tanto la clase debe cumplir lo que diga la interfaz

interface CamisetaBase{
    setColor(color);
    getColor();
}



//-----------------HERENCIA-------------------

//Clase hija
//hereda todas las propiedades de camisa y agrega nuevas
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

//-------------------DECORADORES---------------
