function _Edad(){
    let edad = prompt("Ingrese su edad: ")
    let aceptaTerminos = prompt("¿Acepta los terminos? escriba si o no: ")
    if (edad >= 18 && aceptaTerminos === "si") {
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado")
    }
}

function _Descuento(){
    let edad = prompt("Ingrese edad: ")
    let esEstudiante = prompt("¿Es estudiante? escriba si o no: ")
    if (edad >= 60 || esEstudiante === "si") {
        alert("Descuento aplicado")
    } else {
        alert("No tienes descuento")
    }
}