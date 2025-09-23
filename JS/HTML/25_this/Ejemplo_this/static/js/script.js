//Crear funcion de prueba this
function example() {
    console.log("Elemento clickeado", element)
}

function turnOff(element) {
    if(element.innerText == "On"){
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }
}

//funcion para eliminar el boton
function hide(element) {
    element.remove();
}