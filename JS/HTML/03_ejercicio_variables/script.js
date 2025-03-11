//creacion de variables 
const rut = 224443366
let numero = 0; //numerico
let decimal = 2.5; //num float
let texto = "Hola"; //string
let booleano = true; // bool
let indefinido = undefined;
let nulo = null;

let array = [1, "hola", 25]; //lista elementos
let matriz = [[1,2],[3,4]]; //lista dentro de lista
let objeto = {nombre: "Benja", Edad:17}; //objeto


function float(){
    alert(decimal);
}

function string(){
    alert(texto)
}

function bool(){
    alert(booleano)
}

function float_num(){
    alert(numero)
}

function elements(){
    alert(array)
}

function matriz_(){
    alert(matriz)
}

function object(){
    alert(`Nombre: ${objeto.nombre}, Edad: ${objeto.Edad}`)
}

function M_nulo(){
    alert(nulo)
}

function indefinido_(){
    alert(indefinido)
}


